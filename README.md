# Portfolio

---

<aside>
🥰  [포트폴리오 바로가기](https://kim-hyosun.github.io/Portfolio/)  ****

</aside>

# 1. 목표

---

> **1. 라이브러리 없이 제작하는 만큼 Vanilla JS 본질에 집중하여 Interactive Web 구현하기**

> **2. SCSS문법을 최대한 활용하기!**

# 2. 디렉토리 구조와 코딩컨벤션

---

### ← (click) 폴더 구성 보기

![폴더 구성.png](Portfolio%2011abb50dd07b4b5aa348c80d7b762f9f/%25ED%258F%25B4%25EB%258D%2594_%25EA%25B5%25AC%25EC%2584%25B1.png)

### ← (click) 코딩 컨벤션 보기

![코딩컨벤션.png](Portfolio%2011abb50dd07b4b5aa348c80d7b762f9f/%25EC%25BD%2594%25EB%2594%25A9%25EC%25BB%25A8%25EB%25B2%25A4%25EC%2585%2598.png)

# 3. 사용 기술

---

### 👍 UI Design **:** Vanila Javascipt / HTML / SCSS / SVG

### 👍 U**sed Tools :** GitHub / Visual Studio Code / Figma

# 4. 페이지 구성

---

## **로딩 화면**

<aside>
💡 **o*nload*와 *setTimeout* 이용**

로딩 시간이 길면 user이탈이 발생할 수 있다고 생각되어

로딩 화면(1.4s) + 초기 svg애니메이션의 작동 시간(1.4s)을 3초 내 처리

</aside>

## 마우스 커서

<aside>
💡 **css의  *mix-blend-mode와*  *e.pageX, Y*속성을 이용하여 스타일**

클릭 이벤트가 발생할 태그에 data 속성을 넣어서 *swich*문으로 _data_ 속성을 검증 후 커서의 크기를 바꾸고, 간단한 설명 텍스트를 넣음

</aside>

## **svg path가 그려지는 애니메이션**

<aside>
💡 **css 속성 *dashoffset*이 *dasharray*와 같은 값일 때는 path가 그려지지 않고, *dashoffset*이 0이 되면 path가 전부 나타나는 원리를 이용**

초기 *dasharray*와 초기 *dashoffset*의 값은 모니터 화면의 길이가 바뀔 때마다 svg의 길이가 바뀌기 때문에 명시적으로 작성하지 않고, 스크립트의 기본 내장 함수인 _getTotalLength();_ 를 이용하여 변수로 css에 전달

</aside>

## **스크롤 할 때마다 svg path가 그려지는 이벤트**

<aside>
💡 **스크롤 값에 따라 dashoffset 을 줄여주면 스크롤 한만큼 path가 그려지는 효과**

| const scrollY = window.scrollY + (window.innerHeight); // 스크롤 값 + 화면높이                  |
| ----------------------------------------------------------------------------------------------- |
| const ratio = (scrollY - svg요소.offsetTop) / svg요소.offsetHeight;                             |
| const value = dasharray의 값 - (dasharray의 값 \* ratio); // 스크롤 시 Dashoffset에 대입되는 값 |

화면에 모든 path가 그려진 후는 (위 변수로 지정한 scrollY - svg요소의 offsetTop)의 값이 (svg요소의 offsetHeight값)보다 항상 크기 때문에

ratio는 항상 1이거나 1보다 큼.

그렇기 때문에 value 값은 항상 마이너스 값이 남음.

화면에 아무것도 그려지지 않은 상태는 (svg요소의 offsetTop값)과 (위 변수로 지정한 scrollY의 값)이 **일치**하기 때문에

ratio는 항상 0이거나 0보다 적음.

그렇기 때문에 value값은 항상 dasharray의 값이 남음

항상 value 값이 dasharray ~ 0 사이의 값을 가질 수 있도록,

value값이 0보다 적으면 항상 0을 반환하도록 하고,

value값이 dasharray의 값보다 크면 value가 아닌 dasharray의 값을 반환하도록

아래와 같이 조건 식을 작성

| return value < 0 ? 0 : value > length ? length : value; |
| ------------------------------------------------------- |

</aside>

## **work 부분의 grid 정렬**

<aside>
💡 grid 이용하여 masonry 스타일 구현

</aside>

## **다크 모드와 라이트 모드**

<aside>
💡 클릭 이벤트로 변수로 지정한 배경을 바꿈

</aside>

## **Contact의 emailform**

<aside>
💡 openAPI email JS를 사용함

</aside>

# 5. 문제 및 해결 과정

---

## 🔥 로딩 화면이 깜빡하고 사라진다!?

<aside>
💡 **⇒ window.onload 안에 setTimeout함수를 넣어 로딩 화면이 보이도록 설정**

</aside>

## 🔥 svg의 Y좌표를 viewbox Y로 처리시 offsetTop이 0이 되는 현상

<aside>
💡 inspecter로 확인했을 때 viewbox Y값 만큼을 컨텐츠 영역으로 인식함

**⇒ position top 값을 부여**하여 스크롤 시 영역이 확인됨

더 좋은 방법이 있을지 더 고민하겠습니다.

</aside>

## 🔥 화면 가로 사이즈 변경 시 path간 연결 부분이 틀어지는 현상

<aside>
💡 아직 정확한 해결 점을 찾지는 못하였으나, 1차적으로 디자인 시 비율이 살짝 달리 작업된 부분이 있다는 점이 걸리나,

⇒ 이를 해결하고자 **position의 값을 수정**하여 가장 맞는 값으로 처리

</aside>

## 🔥 화면 가로 사이즈 변경 시 초기 svg path의 길이가 들쭉날쭉?!

<aside>
💡 **⇒ 애니메이션과 dashoffset의 초기 값을 재설정하여 처리**

**🔥**랜딩 되었을 때 스크롤 값이 발생하지 않기 때문에 초기 dashoffset으로 설정된 값에 따라 path가 일부 보이고 보이는 값이 화면 사이즈 변경마다 달라진다고 판단

<aside>
✅ path.style.strokeDashoffset = calcDashoffset((**window.innerHeight - wrap1.offsetTop**), wrap1, pathLength1);

</aside>

⇒ 초기 dashoffset값에 window.innerHeight만 할당하였는데 이는 화면 사이즈가 변경 될 때마다 차이가 생겨 최대한 길이를 감추면서 화면 사이즈 변경에 대응이 될 만한 값을 찾다가 window.innerHeight에서 svg의 offsetTop값을 한번 빼고 할당하여 해결

<aside>
✅ **@keyframes drowing { 100%{** stroke-dashoffset: 0;  **}  }**

</aside>

⇒ 또 처음에 보여지는 path는 복잡하여 요소의 offsetTop을 빼고 할당하는 정도로는 감당 되지 않아 랜딩 시 보여질 path는 분리하여 css 애니메이션으로 처리

<aside>
✅ **@keyframes drowDelay { 100%{  stroke: black;  }  }**

</aside>

⇒ 위 애니메이션과 연결되고 스크롤 시 보여지는 path는 애니메이션이 끝나면 선이 나타나는 애니메이션 추가

</aside>

## 🔥 메뉴 페이지에서 선택한 위치로 이동이 안되는 현상?!

<aside>
💡  ⇒ e.preventDefalut(); 삭제하여 anchor태그 기본 속성으로 이동

</aside>

# 6. 페이지 스크롤 영상

⇒ (1920px \* 1080px) chrome

---

[https://youtu.be/n8CF_WEKS0I](https://youtu.be/n8CF_WEKS0I)

<aside>
✅  **[포트폴리오 바로가기](https://kim-hyosun.github.io/Portfolio/)**

</aside>
