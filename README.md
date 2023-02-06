# Portfolio

---

### Vanilla javascript / ES6+ / HTML / SCSS /

<aside>
👉 작업 기간  :  2023년 1월 16일 ~ 2023년 2월 6일 (약 3주 소요)

</aside>

<aside>
🥰

</aside>

# 1. 목표

---

1. 디자인의 강약 조절을 통해 보여주고 싶은 content를 강조한다.
2. svg의 속성과 바닐라 자바스크립트를 이용하여 스크롤 애니메이션을 익힌다.
3. html의 data속성과 바닐라 자바스크립트를 이용하여 정보를 전달한다.
4. scss의 mixin과 include를 활용하여 \***\*Media Query\*\***를 작성한다.

# 2. 디렉토리 구조와 코딩컨벤션

---

### 폴더 구성

![폴더구성.png](./common/images/%ED%8F%B4%EB%8D%94%EA%B5%AC%EC%84%B1.png)

### 코딩 컨벤션

![코딩컨벤션.png](./common/images/%EC%BD%94%EB%94%A9%EC%BB%A8%EB%B2%A4%EC%85%98.png)

# 3. 주요 기능 설명

---

1. **마우스 커서**

   css의 *mix-blend-mode*를 통하여 디자인 하고, [\*e.page](http://e.page)X, Y\*속성을 이용하여 커서 스타일을 넣었습니다.

   클릭 이벤트가 발생할 곳에 data속성을 넣어서 *swich*문으로 *data*속성을 검증하여 커서의 크기를 키우거나, 안에 간단한 설명 텍스트를 넣어 user의 편의를 추구하였습니다.

   또 user가 웹에서 요소를 클릭을 하고 있음에 대한 이벤트는 마우스가 down될 때는 살짝 *scale*이 작아지고 up될 때는 *scale*을 살짝 커지게 처리 하였습니다.

2. **로딩 화면**

   _onload_ 함수를 이용하여 로딩 화면을 넣었지만, 실제 화면이 구성되는데 시간이 1초 이하로 소요되어 화면이 잠시 보여지고 없어지도록 *setTimeout*을 이용하여 로딩 화면 효과를 주었습니다.

   다만, 오랜 시간이 소요되면 user 이탈이 발생할 수 있다고 판단되어 로딩 화면(1.4s) + 초기 svg애니메이션의 작동 시간(1.4s) 을 3초 내로 처리하였습니다.

   화면은 별똥별을 보면 소원이 이루어진다는 의미에서 착안하여 제 개인적인 취업의 간절함을 표현함과 동시에 방문해주신 user 를 반기는 인사 기능으로 넣었습니다.

3. **svg애니메이션**

   svg path의 *stroke-dasharray*와 _stroke-dashoffset_ 을 이용하여 *dashoffset*이 0에 이르도록 하여 path가 그려지는 애니메이션을 만들었습니다.

   *dasharray*는 path 전체 길이를 나타냅니다. *dashoffset*이 *dasharray*와 같은 값일 때는 path가 그려지지 않고, *dashoffset*이 0이 되면 path가 전부 나타나는 원리를 이용하였습니다.

   다만 초기 *dasharray*와 초기 *dashoffset*의 값은 모니터 화면의 길이가 바뀔 때마다 svg의 길이가 바뀌기 때문에 명시적으로 작성하지 않고, 스크립트의 기본 내장 함수인 _getTotalLength();_ 를 이용하여 변수로 css에 전달하였습니다.

4. **svg 스크롤 이벤트**

   위 애니메이션이 실행된 이후 사용자가 스크롤을 하면 path가 그려집니다.

   초기 *dasharray*는 위와 동일하게 _getTotalLength();_ 를 이용하여 구하여 치환하여 넣고, *dashoffset*은 연산을 위한 함수calcDashoffset을 이용해서 치환하였습니다.

   *dashoffset*이 0이 되는 지점은 path높이의 가장 아래 지점과 일치해야 하고, *dashoffset*이 *dasharray*와 같은 값을 가지는 지점은 path높이의 가장 윗부분과 일치 되어 그 비율(변수 ratio)에 따라 path가 화면에서 그려지게 됩니다.

5. **work 파트의 grid 정렬**

   masonry layout의 스타일과 비슷하지만, masonry 를 쓰지 않고 기본 grid의 기능을 이용하여 구현하였습니다.

6. **다크 모드와 라이트 모드**

   클래스 자를 추가 하여 css를 적용하는 방법으로 구현하였습니다.

7. **Contact의 email**

   openAPI emailjs를 사용하여 넣었습니다.

8. **hover기능을 통한 강조**

   work와 skills부분이 눈에 잘 들어올 수 있도록 css의 hover 효과를 이용하였고, menupage와 loading화면text에 cliptext기능을 이용하여 gradient를 color로 넣었습니다.

# 4. 페이지 구성

---

- 바닐라 자바스크립트를 이용한 마우스 커서 디자인 및 data속성 이용한 커서 이벤트, 다크 모드, 이벤트 리스너와 a링크 기능을 이용한 경로 이동, svg애니메이션, svg스크롤 이벤트 구현, 로딩 화면
- EmailJS API를 이용한 contact form
- scss 미디어 쿼리와 mixin include를 통한 1920px ~ 769px까지 대응

# 5. 문제 및 해결 과정

---

- 초기에 svg 애니메이션 없이 처음부터 끝까지 스크롤 시 path가 그려지도록 처리 하였는데, 화면 로드 후 스크롤 되는 값이 없다 보니, 화면에 처음 구성되는 path의 길이가 (모니터 가로에 따라 달라지는) offset값에 따라 들쭉날쭉하게 처리되었습니다.
  그래서 초기 값을 항상 같게 처리해주기 위해서 스크롤 이벤트가 아닌 화면 로드시 바로 재생되는 애니메이션으로 처리하는 것으로 처리하였습니다.
- 그렇게 했지만 애니메이션과 연결되는 스크롤 svg의 path가 초기 값으로 일부 보여지는 현상이 있었습니다. (스크롤 해야만 보여져야 하는데 스크롤 없이도 보여지는 현상)
  (정확한 이유는 아니지만,) 제가 초기 화면에 svg애니메이션 넣기 전에도 비슷한 현상이 있었고, 그 현상의 원인이 모니터의 가로 값에 따라 달라지는 요소의 offsetTop값이 영향을 미쳤다고 생각이 들었습니다.
  그래서 초기 dashoffset 설정 시 스크롤이 발생하지 않을 때에는 path가 보여지지 않도록 요소의 offsetTop값을 한번 더 빼주었더니 스크롤 시에만 보여지는 path 로 처리가 되었습니다.
- svg 애니메이션 영역과 스크롤 svg가 같이 연결되도록 레이아웃을 잡아주는 것이 쉽지 않았습니다. viewbox속성에 맞춰 모니터 가로에 따라 svg가 움직이고, html 작성 시 content영역과 스크롤 이미지 영역으로 나눠서 스크롤 이미지 영역에 content가 겹쳐지도록 처리했기 때문에 영역을 나누는 것 또한 쉽지 않았습니다.
  그래서 position을 이용하여 영역을 잡고, 가로는 디자인 자체를 100% 정중앙으로 왔을 때 서로 이어질 수 있도록 처리하였으며, 스크롤 바 7px을 빼서 처리하였습니다.

# 6. 페이지 스크롤 영상

⇒ (1920px \* 1080px) chrome

---

[https://youtu.be/n8CF_WEKS0I](https://youtu.be/n8CF_WEKS0I)
