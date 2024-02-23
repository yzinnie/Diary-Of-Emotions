<div align="center">

<h4>오늘 나의 감정 기록하기</h4> 
<h4>오늘의 한 줄 일기</h4>

<img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/4ef91669-7652-48b6-ad09-7e5d4b2a5921.png" width="200" />
</div>

<h4>배포 주소</h4>
https://emoji-diary-ver.firebaseapp.com/

<br>

<h2> 🦄 프로젝트 소개</h2>
<h4>오늘 일기를 감정과 함께 기록합니다.</h4>
<h4>하루에 한 줄로 스트레스가 해소될 수 있다고 하니, 우리 함께 일기를 써보는 건 어떨까요?</h4>

<br>
<h2> 🌐 화면 구성</h2>

| 메인 페이지 | 작성 페이지 | 수정 페이지 |  읽기 페이지 |
| --- | --- | --- | --- |
| <img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/7f4dac30-f7f9-4a30-8147-b719b6c909f2.png" width="500" /> | <img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/841a4ed2-9d84-492b-9222-a8c0dc09f64b.png" width="500" /> |  <img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/773fb9b5-614e-47e9-af25-d87462b7e0b0.png" width="500" /> |<img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/865b7a44-ebe2-439a-9ef2-7237d9921cfa" width="500" /> |

<br>
<h2> 🐬 Stacks </h2>
 
 #### Environment
 <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
 
 #### Config
 <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
 
#### Development
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  

####  Library
 <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> 
 
#### Test & deploy
   <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"> 
 
<br>
<h2> 🦾 주요 기능 </h2>

 #### 일기를 작성합니다
- 오늘의 일기를 5가지의 감정 이모지와 함께 기록할 수 있어요.
- 어제 쓰지 못한 일기도 날짜를 지정해서 작성할 수 있어요.
- 오늘 일기를 길게 쓰고 싶지 않다면 감정과 함께 'ㅋ'이나 'ㅠㅠ' 같은 짧은 글이라도 괜찮아요.

#### 일기를 수정합니다
- 일기의 내용을 바꾸고 싶다면 수정할 수 있어요.
- 기분 나쁜 날, 일기를 저장한 후에 갑자기 오늘 내 감정이 좋아졌다면 수정할 수 있어요.

#### 일기를 삭제합니다.
- 기록하고 싶지 않은 내용은 삭제할 수 있어요.

#### 일기 정렬 기능
- 일기를 최신순과 감정순으로 정렬할 수 있어요.
 
---
####  에러 처리 

- 잘못된 경로
  <br />
존재하지 않은 일기에 접근할 경우
<br/>
이전 페이지 링크는 일기 리스트 홈으로 연결
  <br />

![image](https://github.com/yzinnie/diary/assets/126447980/eda4107a-acd2-47d6-86a1-8891949ef3a1)

```
  if (!data) {
    return (
      <div className="DiaryPage-message">
        요청하신 페이지를 찾을 수 없습니다. <br /> 입력하신 주소를 다시 확인해
        주세요.
        <br />
        <p onClick={() => navigate('/home')}>이전 페이지로 돌아가기</p>
      </div>
    );
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

```
#### to-do
- [ ] 모바일 화면 구현
- [ ] 배포 환경에서 기능 작동 계속 확인하기
- [x] 필요한 사람들에게 공유 💌 


