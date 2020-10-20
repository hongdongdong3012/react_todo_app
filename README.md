<h2>React를 활용하여 To do 웹 어플리케이션 만들기</h2>
<h3>기능</h3>
- 할 일 입력 및 삭제
- 날짜 및 시간 출력
- 배경화면 테마 변경

<h3>난이도</h3>
- 하
 
<h3>소요시간</h3>
- 3시간

<h3>배포</h3>
- 아마존 웹서비스 Amplify 

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fmo0xh%2Fbtqw7wabtea%2FTO4RcKR7vFOrklBlwo8ZT0%2Fimg.png" />
- App: 화면 전체를 차지합니다.
- Content: Clock과 Todo를 포함합니다
- Clock: 현재시간을 출력합니다.
- Todo: 할 일을 입력받고 출력합니다. 그림에는 생략되었지만 하위컴포넌트로 TodoList와 TodoList가 포함하는 TodoRow가 있습니다.

=====================================================

<h3>Clock 컴포넌트</h3>
<ol>
  <li>Clock 컴포넌트 생성 및 Content 컴포넌트에서 import하기</li>
  <li>new Data()를 통해 현재 날짜 정보를 state에 저장하기</li>
  <li>연, 월, 일, 시 나누기</li>
  <li>1분마다 화면 업데이트하기</li>
</ol>

=====================================================

<h3>Todo 컴포넌트</h3>
<ol>
  <li>사용자로부터 할 일을 입력받는 input tag 생성</li>
  <li>입력받은 할 일을 state와 localstorage에 저장</li>
  <li>어플리케이션 실행 시 localstorage에 저장된 할 일 목록을 가져오기</li>
</ol>

<h2>완성</h2>

![study_01](https://user-images.githubusercontent.com/61222924/96547942-ee518f80-12e7-11eb-8cf5-9506440652e7.png)
