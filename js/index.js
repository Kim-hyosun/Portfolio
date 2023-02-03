/**  메뉴 toggle기능 생성*/
(function showMenu() {
  const menuOpen = document.querySelector('header .icons .menuBtn');
  const menuPage = document.querySelector('.menuPage');
  const menuClose = document.querySelector('.menuPage .topline .menuClose')
  menuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    menuPage.classList.add('active');
    menuPage.classList.remove('none');
  })
  menuClose.addEventListener('click', (e) => {
    e.preventDefault();
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
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
  })
  menuAbout.addEventListener('click', () => {
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
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
(function drowingPath () { 
const wrap = document.querySelector('.bg1');
const path1 = document.querySelector('#drowingIMG1');
const pathLength1 = path1.getTotalLength();

const wrap2 = document.querySelector('.bg2');
const path2 = document.querySelector('#drowingIMG2');
const pathLength2 = path2.getTotalLength();
// console.log(wrap2.offsetTop)

path1.style.strokeDasharray = pathLength1;
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight, wrap, pathLength1);

path2.style.strokeDasharray = pathLength2;
path2.style.strokeDashoffset = calcDashoffset(window.innerHeight, wrap, pathLength2);

function calcDashoffset(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - (length * ratio)
  // console.log(value)
  return value < 0 ? 0 : value > length ? length : value;
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY - 20 + (window.innerHeight * 0.998);
  path1.style.strokeDashoffset = calcDashoffset(scrollY, wrap, pathLength1);

})

 window.addEventListener('scroll', () => {
  const scrollY = window.scrollY - wrap2.offsetTop + 270 + (window.innerHeight * 1.99);
   path2.style.strokeDashoffset = calcDashoffset(scrollY, wrap, pathLength2);
}) 
})();
