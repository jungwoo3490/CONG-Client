# Client
<div align="center">

<h2> Cong </h2>

<img src=""  alt="서비스대표-이미지" />
<div>축하의 순간, 사라지지 않게 콩!</div>

</div>

<h2> ✨ (서비스) 주요 기능 </h2>

<details>
  <summary> ✔️ 용어 정리</summary>

| 용어        | 정의                                                                      |
|------------|---------------------------------------------------------------------------|
| 호스트     | 이벤트를 개설하는 사람을 의미합니다.                                       |
| 방문자     | 타인의 방에 들어가서 축하메모를 남기는 사람을 의미합니다.                |
| 이벤트     | (내부 용어 : 방) 타인으로부터 축하메모를 받고 싶은 기념일, 행사 등을 의미합니다. |
| 축하메모   | 방문자가 호스트에게 작성한 축하 메세지를 의미합니다.                       |

</details>


<h3> 1️⃣ 메인 뷰 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> 내가 받은 편지를 볼 수 있어요! </strong> <br/>편지리스트 GET  <br/></div>

<h3> 2️⃣ 이벤트(방) 생성 뷰 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> 방(이벤트)을 만드는 페이지입니다. </strong><br/> 방 생성 POST   <br/></div>

<h3> 3️⃣ 편지 작성/커스텀 뷰 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> 방문자가 축하 메세지를 적을 수 있는 페이지입니다. </strong><br/> 편지 작성 POST  <br/></div>

<h3> 4️⃣ 로그인 뷰 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> 호스트가 로그인을 할 수 있는 페이지입니다 </strong><br/> 로그인 POST  <br/></div>

<h2> 👥 Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="">
              <img src="https://github.com/SOPT33-SOPKATHON/Client/assets/93575538/69585dd6-c7ba-4831-b54c-acb7b9012ea4" width="200" height="200" alt="깃허브계정-이재훈">
              <br />
              <b>ljh0608</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="">
              <img src="https://github.com/SOPT33-SOPKATHON/Client/assets/93575538/a93cd3cb-c623-4e03-9b20-491acd6e9da2" width="200" height="200" alt="깃허브계정-문다현">
              <br />
              <b>moondda</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="">
              <img src="https://github.com/SOPT33-SOPKATHON/Client/assets/93575538/464419fe-609c-4723-93f8-0c409ae6118f" width="200" height="200" alt="깃허브계정-이정우">
              <br />
              <b>jungwoo3490</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            이재훈 <br/>
      </td>
       <td>
            문다현 <br/>
      </td>
       <td>
            이정우 <br/>
      </td>
    </tr>
  	<tr align="center">
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

<div align="center">

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
| Build Tool           | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                                                                                                   |

</div>

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>



<details>
  <summary> ✔️ 브랜치 유형</summary>

| 브랜치 유형          | 설명                               | 예시                |
| -------------------- | ---------------------------------- | ------------------- |
| `feat/기능/이니셜`   | 새로운 기능 추가                   | `feat/common/mdh`   |
| `fix/기능/이니셜`    | 기존 기능의 버그 수정              | `fix/common/mdh`    |
| `hotfix` | 프로덕션 환경에서 긴급한 버그 수정 | `hotfix/common/mdh` |

</details>

<details><summary> ✔️ 브랜치 운영</summary>

| 브랜치 운영         | 설명                                                                |
| ------------------- | ------------------------------------------------------------------- |
| `main`              | 완전히 안전하다고 판단되었을 때, 즉 배포가 가능한 최종 merge하는 곳 |
| `develop`           | 배포하기 전 개발 중일 때 각자의 브랜치에서 merge하는 브랜치         |

</details>

<details><summary> ✔️ 커밋 컨벤션 </summary>
  
| 커밋 유형  | 설명                                        |
| ---------- | ------------------------------------------- |
| `init`     | 개발 환경 초기 세팅                         |
| `feat`     | 새로운 기능 추가 (새로운 구현)              |
| `fix`      | 버그 수정                                   |
| `docs`     | 문서 추가, 수정, 삭제                       |
| `style`    | 코드 포맷팅 (코드 순서 변경, 세미콜론 추가) |
| `design`   | CSS 등 사용자 UI 디자인 변경                |
| `refactor` | 코드 리팩토링                               |
| `chore`    | 그 외 자잘한 수정                           |

</details>
<br/>

<h2> 📁 폴더 구조 </h2>

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
|-- 📁 assets

       |--📁Images

       |--📁svgs
|-- 📁 components

       |--📁Apage
|-- 📁 pages

            |--Apage.tsx
|-- 📁 styles

      -globalStyle.js

      -theme.js
|— 📁 utils

|— 📁 hooks

|— 📁 recoil

|— 📁 selectors

|— 📁 atom
```

<h2>웨비 Before and After</h2>
<h3>Before</h3>
<img src="https://github.com/SOPT33-SOPKATHON/Client/assets/93575538/1cf0ad8d-fa25-454e-8deb-1760b2a36cba" alt="웨비 팀원들 사진 (before)"/>
 
<h3>After</h3>
<img src="" alt="웨비 팀원들 사진 (after)"/>
