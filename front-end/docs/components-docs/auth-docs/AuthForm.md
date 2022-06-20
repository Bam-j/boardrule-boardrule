# AuthForm.js
`AuthForm.js`는 로그인 페이지의 입력 폼(텍스트 입력란, 제출 버튼)을 렌더링하는 컴포넌트입니다.
```jsx
const authTextMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = authTextMap[type];

  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput autoComplete={'username'} name={'username'} placeholder='아이디' onChange={onChange}
                     value={form.username} />
        <StyledInput type={'password'} autoComplete={'new-password'} name={'password'} placeholder='비밀번호'
                     onChange={onChange} value={form.password} />
        {type === 'register' && (
          <StyledInput type={'password'} autoComplete={'new-password'} name={'passwordConfirm'} placeholder='비밀번호 확인'
                       onChange={onChange} value={form.passwordConfirm} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <StyledButton fullWidth>{text}</StyledButton>
      </form>
      <StyledFooter>
        {type === 'login' ? (
          <div>
            <p className={'guide-text'}>회원이 아니신가요?</p>
            <Link to={'/register'}>회원가입</Link>
          </div>
        ) : (
          <div>
            <p className={'guide-text'}>이미 회원이시라면</p>
            <Link to={'/login'}>로그인</Link>
          </div>
        )}
      </StyledFooter>
    </StyledAuthForm>
  );
};
```
<hr>

```jsx
const authTextMap = {
  login: '로그인',
  register: '회원가입',
};
```
`authTextMap`은 현재 폼의 상태(로그인/회원가입)에 따라 버튼에 표시될 문구를 저장하고 있습니다. <br>
조건문 대신 간결하게 type에 따라 상태를 변화시킬 수 있도록 사용됩니다.

<hr>

```jsx
const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = authTextMap[type];

  (...)
}
```
`AuthForm` 컴포넌트 본문입니다. props로 로그인인지 회원가입인지를 전달하는 `type`, 사용자 입력란인 `form`,
입력 폼의 변화를 감지하는 `onChange`, 로그인 또는 회원가입 버튼을 눌렀을 때 동작하는 `onSubmit`, 로그인/회원가입 과정에서 발생하는 오류를 담은 `error`를
받습니다.<br>

`text`에는 전달받은 type에 따라서 authTextMap의 결과를 얻고 저장합니다.
<hr>

다음은 `AuthForm` 컴포넌트의 렌더링 결과인 return문입니다.
```jsx
  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput autoComplete={'username'} name={'username'} placeholder='아이디' onChange={onChange}
                     value={form.username} />
        <StyledInput type={'password'} autoComplete={'new-password'} name={'password'} placeholder='비밀번호'
                     onChange={onChange} value={form.password} />
        {type === 'register' && (
          <StyledInput type={'password'} autoComplete={'new-password'} name={'passwordConfirm'} placeholder='비밀번호 확인'
                       onChange={onChange} value={form.passwordConfirm} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <StyledButton fullWidth>{text}</StyledButton>
      </form>
      <StyledFooter>
        {type === 'login' ? (
          <div>
            <p className={'guide-text'}>회원이 아니신가요?</p>
            <Link to={'/register'}>회원가입</Link>
          </div>
        ) : (
          <div>
            <p className={'guide-text'}>이미 회원이시라면</p>
            <Link to={'/login'}>로그인</Link>
          </div>
        )}
      </StyledFooter>
    </StyledAuthForm>
  );
```
<br>

```jsx
<h3>{text}</h3>
```
이 부분에서는 현재 Form이 어떤 상태인지를 사용자에게 알려줍니다. 전달된 type에 따라 결정된 text의 결과를 반환합니다.
![image](https://user-images.githubusercontent.com/64255763/174594445-a22ca638-b19d-43fd-93de-0089afb86a99.png)![image](https://user-images.githubusercontent.com/64255763/174594511-2bacac17-256d-4e7c-90a8-c8968751eb54.png)

<br>

```jsx
  <form onSubmit={onSubmit}>
        <StyledInput autoComplete={'username'} name={'username'} placeholder='아이디' onChange={onChange}
                     value={form.username} />
        <StyledInput type={'password'} autoComplete={'new-password'} name={'password'} placeholder='비밀번호'
                     onChange={onChange} value={form.password} />
        {type === 'register' && (
          <StyledInput type={'password'} autoComplete={'new-password'} name={'passwordConfirm'} placeholder='비밀번호 확인'
                       onChange={onChange} value={form.passwordConfirm} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <StyledButton fullWidth>{text}</StyledButton>
      </form>
```
위 코드는 사용자 입력 폼을 표시해주는 코드입니다. 기본적으로 `username`과 `password`를 표시해줍니다. 만약 전달받은 `type`이 `register`라면 
`passwordConfirm`폼을 추가해서 렌더링 해줍니다. 모든 폼 입력란은 변경을 감지하는 `onChange`가 동작하고 있습니다.

![image](https://user-images.githubusercontent.com/64255763/174595022-3c952f5a-256c-400b-87ec-7cdb74ce5ce4.png)
![image](https://user-images.githubusercontent.com/64255763/174595093-38fefd51-a968-41bd-a4f3-e3b912f4e1f6.png)

<br>

```jsx
{error && <ErrorMessage>{error}</ErrorMessage>}
```
에러가 존재한다면, error 메세지를 띄워주고, 그렇지 않으면 띄우지 않도록 조건부 렌더링을 실시합니다.


![image](https://user-images.githubusercontent.com/64255763/174595163-3e4ca78b-f15e-4c75-aed6-86ce2d1fc421.png)