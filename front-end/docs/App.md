# App.js
`App.js`에서는 라우팅 페이지들을 정의했습니다.
```jsx
<Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/community'} element={<PostListPage />} />
        <Route path={'/rules'} element={<GameRuleViewer />} />
        <Route path={'/write'} element={<WritePage />} />
        <Route path={'/@:username'}>
          <Route index element={<PostListPage />} />
          <Route path={':postId'} element={<PostPage />} />
        </Route>
        <Route path={':gameId'}>
          <Route path={':page'} element={<RulePage />} />
        </Route>
      </Routes>
```
<hr>

```jsx
<Route path={'/'} element={<MainPage />} />
```
메인 페이지입니다.

<hr>

```jsx
<Route path={'/login'} element={<LoginPage />} />
<Route path={'/register'} element={<RegisterPage />} />
```
로그인 페이지와 회원가입 페이지에 대한 라우팅 주소입니다.

<hr>

```jsx
<Route path={'/community'} element={<PostListPage />} />
<Route path={'/rules'} element={<GameRuleViewer />} />
<Route path={'/write'} element={<WritePage />} />
```
커뮤니티 페이지와 게임 규칙 페이지, 게시글 작성 페이지에 대한 라우팅 주소입니다.

<hr>

```jsx
<Route path={'/@:username'}>
  <Route index element={<PostListPage />} />
  <Route path={':postId'} element={<PostPage />} />
</Route>
```
게시글 읽기와 관련된 중첩 라우팅입니다. 기본적으로 게시글 리스트를 렌더링하며,
 포스트를 클릭하는 경우 포스트 고유 id가 웹 페이지 url에 나타나며, 해당 포스트 읽기 페이지로 이동됩니다.

<br/>

![image](https://user-images.githubusercontent.com/64255763/174591944-77ae958a-4644-496e-86cd-b1810dbd75ab.png)


<hr>

```jsx
<Route path={':gameId'}>
 <Route path={':page'} element={<RulePage />} />
</Route>
```
게임 룰 페이지에 대한 라우팅입니다. 게임 룰을 표시하며 동시에, 룰의 몇 페이지를 읽고 있는지도 보여줍니다.

![image](https://user-images.githubusercontent.com/64255763/174592132-067e03ca-5ec9-4753-a1f4-de65ec5a930a.png)
![image](https://user-images.githubusercontent.com/64255763/174592203-9481903c-c598-43cb-825a-15d764a1f22b.png)