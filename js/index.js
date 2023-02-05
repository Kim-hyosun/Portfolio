/**  메뉴 toggle기능 생성*/
(function showMenu() {
  const menuOpen = document.querySelector('header .icons .menuBtn');
  const menuPage = document.querySelector('.menuPage');
  const menuClose = document.querySelector('.menuPage .topline .menuClose')
  menuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    menuPage.classList.add('active');
    menuPage.classList.remove('none');
    document.body.classList.add('noScroll');
  })
  menuClose.addEventListener('click', (e) => {
    e.preventDefault();
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
    document.body.classList.remove('noScroll');
  })
})();

/** 메뉴로 원하는 내부 페이지로 이동하기*/
(function toPAGE() {
  const menuWork = document.querySelector('#toWORK');
  const menuAbout = document.querySelector('#toABOUT');
  const menuPage = document.querySelector('.menuPage');

  menuWork.addEventListener('click', () => {
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
    document.body.classList.remove('noScroll');
  })
  menuAbout.addEventListener('click', () => {
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
    document.body.classList.remove('noScroll');
  })
})();

/** darkmode & lightmode */
(function pageModeToggle() {
  const turnOff = document.querySelector('header .icons .darkBtn');
  const turnOn = document.querySelector('header .icons .lightBtn');
  turnOff.addEventListener('click', () => {
    document.body.classList.add('dark');
  })
  turnOn.addEventListener('click', () => {
    document.body.classList.remove('dark');
  })
})();

/** drowing path */
(function drowingPath() {
  const wrap1 = document.querySelector('.bg1');
  const path1 = document.querySelector('#drowingIMG1');
  const pathLength1 = path1.getTotalLength();

  const wrap2 = document.querySelector('.bg2');
  const path2 = document.querySelector('#drowingIMG2');
  const pathLength2 = path2.getTotalLength();

  path1.style.strokeDasharray = pathLength1;
  path1.style.strokeDashoffset = calcDashoffset((window.innerHeight - wrap1.offsetTop), wrap1, pathLength1);
  console.log(wrap1.offsetTop)

  path2.style.strokeDasharray = pathLength2;
  path2.style.strokeDashoffset = calcDashoffset(window.innerHeight, wrap2, pathLength2);

  function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - (length * ratio);
    return value < 0 ? 0 : value > length ? length : value;
  }

  window.addEventListener('scroll', () => {
    const scrollY1 = window.scrollY + (window.innerHeight * 0.6);
    path1.style.strokeDashoffset = calcDashoffset(scrollY1, wrap1, pathLength1);
  })

  window.addEventListener('scroll', () => {
    const scrollY2 = window.scrollY + (window.innerHeight * 0.7);
    path2.style.strokeDashoffset = calcDashoffset(scrollY2, wrap2, pathLength2);
  })
})();

/** main drowing path animation */
(function drowMainPath() {
  const mainPath = document.querySelector('#mainpath');
  const mainPathlength = mainPath.getTotalLength();
  mainPath.style.setProperty('--length', mainPathlength)
})();


