import Joi from 'joi';
import User from '../../models/user';

/*
  test계정: test1
  패스워드: t123
 */
export const register = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;

    return;
  }

  const { username, password } = ctx.request.body;

  try {
    const exists = await User.findByUsername(username);

    if (exists) {
      ctx.status = 409;

      return;
    }

    const user = new User({ username });

    await user.setPassword(password);
    await user.save();
    ctx.body = user.serialize();

    const token = user.generateToken();

    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  }
  catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async ctx => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    console.log('유저이름/패스워드 미존재');
    ctx.status = 401;

    return;
  }

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      console.log('계정 틀림');
      ctx.status = 401;

      return;
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      console.log('패스워드 오류');
      ctx.status = 401;

      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();

    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  }
  catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async ctx => {
  const { user } = ctx.state;

  if (!user) {
    ctx.status = 401;

    return;
  }

  ctx.body = user;
};

export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204;
};