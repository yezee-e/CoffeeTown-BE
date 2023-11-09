# CoffeeTown-BE

>
깃헙주소
베포주소:https://a-21e3735.slack.com/archives/C05UKFSEA80/p1698297708578909

## Project Overview

### <span style="color:#528c3f">why coffeeTown?</span>
커피와 음료, 디저트로 구성된 "카페"를 아이템으로 선정한 프로젝트로
b2c페이지에서 가장 중요한 회원가입,로그인,장바구니 기능 구현에 충실하였습니다. 

### <span style="color: #528c3f">작업기간</span>
2023/10/16 - 2023/10/26

### <span style="color:#528c3f">기술스택(총 팀원:3명)</span>

**백엔드**
NODE.JS
EXPRESS
typeORM
MYSQL


**프론트**
JavaScript(ES6+)
React
postCSS

**협업도구**
Git
Github
Slack
디스코드

###  <span style="color: #528c3f">개인별 담당기능</span>
하이라이트 => `내가 구현한 기능!!`
페이지별로 나눠서 기능구현=>회원가입,로그인,메인,장바구니

* `회원가입 페이지`
* `로그인 페이지`

* main페이지
Nav,footer
캐러셀기능구현
장바구니 담기 기능구현
`검색기능구현`

* 장바구니 페이지
장바구니 수량 증가 기능구현

* `aws-elasticbeanstalk 배포진행`


###  <span style="color: #528c3f">구현기능 결과화면</span>


**1. 회원가입&로그인**
회원가입 시 express 내장 모듈인 crypto를 사용해서 비밀번호를 암호화 시켜 한층 보안을 강화시켰고 회원가입과 동시에 토큰값을 생성해주었습니다.
로그인 전에 미들웨어 기능을 통해 코튼값을 먼저 검증하여 회원 유무를 판별하도록 만들었습니다.

**2. 검색**
추후 많은 데이터가 생기거나 긴 텍스트가 들어왔을때에도 검색을 빠르고 정확하게 하기 위해 index로 데이터를 만들었습니다.
클라이언트에서 검색한 단어를 URLSearchParams객체로 쿼리스트링을 생성하고 params를 통해 서버에 보낼 수 있도록 만들었습니다

## Project Review
<span style="color: #528c3f">프로젝트로 얻은 부분</span>
<span style="color: #528c3f">개선해 나갈 부분</span>
