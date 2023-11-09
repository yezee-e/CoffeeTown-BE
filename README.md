# CoffeeTown 팀 프로젝트

> 베포주소:https://a-21e3735.slack.com/archives/C05UKFSEA80/p1698297708578909

<br/>
<br/>
<br/>


## Project Overview

### why coffeeTown?
커피와 음료, 디저트로 구성된 "카페"를 아이템으로 선정한 프로젝트로    
b2c페이지에서 가장 중요한 회원가입,로그인,장바구니 기능 구현에 충실하였습니다. 
<br/>
<br/>

### 작업기간    
2023/10/16 - 2023/10/26
<br/>
<br/>

### ERD

<img src="https://velog.velcdn.com/images/yezee/post/d95e94cb-a647-411b-95a3-c11453f864fc/image.PNG" width=500px/>

### 시퀀스다이어그램
<img src="https://velog.velcdn.com/images/yezee/post/def04449-1b3f-4fed-8a87-910b05e4d193/image.png" width=500px/>

### 기술스택(총 팀원:3명-풀스텍,프론트,백엔드)
**🙌 풀스택으로 백엔드와 프론트의 기술 스택 전부 사용하였습니다**

**백엔드**      
NODE.JS      
EXPRESS      
typeORM      
MYSQL      

<br/>

**프론트**      
JavaScript(ES6+)    
React    
postCSS    
<br/>

**협업도구**    
Git    
Github      
Slack      
디스코드      

<img src="https://velog.velcdn.com/images/yezee/post/d1eec249-a1d1-4999-a48b-dd44ed88edc1/image.png" width=400px/>

<br/>
<br/>



### 개인별 담당기능  
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

 

## Project Review
###  회원가입 및 로그인


회원가입 시 express 내장 모듈인 crypto를 사용해서 비밀번호를 암호화 시켜 한층 보안을 강화시켰고 회원가입과 동시에 토큰값을 생성해주었습니다.    
로그인 전에 미들웨어 기능을 통해 코튼값을 먼저 검증하여 회원 유무를 판별하도록 만들었습니다.    


<br/>

### 검색

추후 많은 데이터가 생기거나 긴 텍스트가 들어왔을때에도 검색을 빠르고 정확하게 하기 위해 index로 데이터를 만들었습니다.      
클라이언트에서 검색한 단어를 URLSearchParams객체로 쿼리스트링을 생성하고 params를 통해 서버에 보낼 수 있도록 만들었습니다      


풀스텍으로 프로젝트를 진행하면서 백엔드에서 데이터를 가공하고 프론트에서 데이터를 직접 받아 보면서       
각 각의 입장에서 데이터를 전달하고 받을 때 신경써야할 부분을 명확히 이해할 수 있었습니다      
아래 코드는 검색기능을 만들 때 params로 검색된 데이터를 받을 수 있게 만든 코드입니다      
제품은 잘 검색되었지만 프론트에서 데이터를 전달 받아서 map으로 rendering할때 기존에 받은 json형식과 달라서 화면서 출력할 수 없는 문제가 발생하였습니다        

<img src="https://velog.velcdn.com/images/yezee/post/21a684bc-5492-4a70-8c04-fe44aea8f7d5/image.png" width=300px/ >

<img src="https://velog.velcdn.com/images/yezee/post/e7e65a9c-d585-4a0d-9c02-82a4fa86d7e2/image.png" width=400px/ >

전체 데이터를 보여주는 sql에 params로 넘겨받은 값만 검색하는 sql을 추가하는 방법으로 프론트에서 코드를 수정하지 않고 원래 사용하고 있는 useState에 저장된 state값으로 검색된 데이터를 화면에 보여줄 수 있었습니다.       

<img src="https://velog.velcdn.com/images/yezee/post/e1d08a39-50a4-449a-93ff-3e41bf7f9ccc/image.png" width=300px/ >

<img src="https://velog.velcdn.com/images/yezee/post/e50b95f5-2ebe-483d-97f0-74aa44861e98/image.png" width=400px/ >

<br/>
