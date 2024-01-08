<div align="center">
<h2> Diary of Emotions 📓</h2>
<h4>오늘 나의 감정 기록하기</h4> 

<img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/4ef91669-7652-48b6-ad09-7e5d4b2a5921.png" width="200" />
</div>

<h4>배포 주소</h4>
https://yzinnie-react-project.web.app/

<br>

<h2> 🦄 프로젝트 소개</h2>
<h4>오늘 나의 감정은 어땠는지 기록하는 것만으로도 스트레스가 해소된다고 합니다. </h4>

<h4> 하루의 스트레스가 일기 한 줄로 나아질 수 있다니, 한번 시도해 볼만하지 않나요?</h4>
<br>
<h2> 🌐 화면 구성</h2>

| 메인 페이지 | 작성 페이지 | 수정 페이지 |  읽기 페이지 |
| --- | --- | --- | --- |
| <img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/7f4dac30-f7f9-4a30-8147-b719b6c909f2.png" width="500" /> | <img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/841a4ed2-9d84-492b-9222-a8c0dc09f64b.png" width="500" /> |  <img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/773fb9b5-614e-47e9-af25-d87462b7e0b0.png" width="500" /> |<img src="https://github.com/yzinnie/My-Diary-Of-Emotions/assets/126447980/865b7a44-ebe2-439a-9ef2-7237d9921cfa" width="500" /> |

<br>
<h2> 🐬 Stacks </h2>
 
 ### Environment
 <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
 
 ### Config
 <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
 
 ### Development
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  

### Test & deploy
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

<br>

## Architecture
#### Directory Structure


```
react-diary   
├─ .gitignore
├─ firebase.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  
└─ src
   ├─ App.css
   ├─ App.js
   ├─ components
   │  ├─ DiaryEditor.js
   │  ├─ DiaryItem.js
   │  ├─ DiaryList.js
   │  ├─ EmotionItem.js
   │  ├─ MyButton.js
   │  └─ MyHeader.js
   ├─ index.css
   ├─ index.js
   ├─ pages
   │  ├─ Diary.js
   │  ├─ Edit.js
   │  ├─ Home.js
   │  └─ New.js
   └─ util
      ├─ date.js
      └─ emotion.js

```
 
 


