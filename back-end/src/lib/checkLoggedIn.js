/*
*  커뮤니티 글 작성/수정/삭제 등은 로그인된 권한 있는 유저에게만 허용하기 위한 함수
 */
const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401;

    return;
  }
  return next();
};

export default checkLoggedIn;