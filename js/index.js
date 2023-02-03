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
const wrap1 = document.querySelector('.bg1');
const path1 = document.querySelector('#drowingIMG1');
const pathLength1 = path1.getTotalLength();

const wrap2 = document.querySelector('.bg2');
const path2 = document.querySelector('#drowingIMG2');
const pathLength2 = path2.getTotalLength();
// console.log(wrap2.offsetTop)

path1.style.strokeDasharray = pathLength1;
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight - (wrap1.offsetTop*0.48), wrap1, pathLength1);

path2.style.strokeDasharray = pathLength2;
path2.style.strokeDashoffset = calcDashoffset(window.innerHeight, wrap2, pathLength2);

function calcDashoffset(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - (length * ratio)
  console.log(value)
  return value < 0 ? 0 : value > length ? length : value;
}
// console.log(wrap.offsetTop)
window.addEventListener('scroll', () => {
  const scrollY1 = window.scrollY - (wrap1.offsetTop * 0.4) + (window.innerHeight * 0.98);
  path1.style.strokeDashoffset = calcDashoffset(scrollY1, wrap1, pathLength1);
})

 window.addEventListener('scroll', () => {
  const scrollY2 = window.scrollY + (window.innerHeight * 0.8);
   path2.style.strokeDashoffset = calcDashoffset(scrollY2, wrap2, pathLength2);
}) 
})();

/** logostyle 
gsap.registerPlugin(SplitText);
const anchors = document.querySelector('.infoLine a')


  const res = splitting({
    target: anchors,
    by: 'chars'
  })
  const icon = anchor.querySelector('svg')
  for (const char of [...res[0].chars, icon]) {
    if (char) {
      char.style.setProperty('--r', gsap.utils.random(-15, 15, 1))
      char.style.setProperty('--y', gsap.utils.random(-50, 25, 1))
      char.style.setProperty('--x', gsap.utils.random(-25, 25, 1))
    }
}
function mouseOver() {
  tl.restart();
}

document.getElementById("quote").addEventListener("mouseover", mouseOver);
*/

/** mouse cursor style

const custom_cursor = document.getElementById("custom_cursor");
let body = document.querySelector("body");

function custom_show_cursor(e) {
	if (custom_cursor.classList.contains('custom_cursor_hidden')) {
		custom_cursor.classList.remove('custom_cursor_hidden');
	}
	custom_cursor.classList.add('custom_cursor_visible');
}

function custom_hide_cursor(e) {
	if (custom_cursor.classList.contains('custom_cursor_visible')) {
		custom_cursor.classList.remove('custom_cursor_visible');
	}
	custom_cursor.classList.add('custom_cursor_hidden');
}

function custom_mousemove(e) {
	custom_show_cursor();
	let custom_cursor_width = custom_cursor.offsetWidth * 0.5;
	let custom_cursor_height = custom_cursor.offsetHeight * 0.5;
	let custom_cursor_x = e.clientX - custom_cursor_width;
	let custom_cursor_y = e.clientY - custom_cursor_height;
	let custom_cursor_pos = `translate(${custom_cursor_x}px, ${custom_cursor_y}px)`;
	custom_cursor.style.transform = custom_cursor_pos;
}
window.addEventListener('mousemove', custom_mousemove);
body.addEventListener('mouseleave', custom_hide_cursor);

function custom_hover_cursor(e) {
	custom_cursor.classList.add('custom_cursor_hover');
}

function custom_unhover_cursor(e) {
	custom_cursor.classList.remove('custom_cursor_hover');
}
document.querySelectorAll('a').forEach(item => {
	item.addEventListener('mouseover', custom_hover_cursor);
	item.addEventListener('mouseleave', custom_unhover_cursor);
})
document.querySelectorAll('input').forEach(item => {
	item.addEventListener('mouseover', custom_hover_cursor);
	item.addEventListener('mouseleave', custom_unhover_cursor);
})
document.querySelectorAll('button').forEach(item => {
	item.addEventListener('mouseover', custom_hover_cursor);
	item.addEventListener('mouseleave', custom_unhover_cursor);
})
document.querySelectorAll('.mycustomclass').forEach(item => {
	item.addEventListener('mouseover', custom_hover_cursor);
	item.addEventListener('mouseleave', custom_unhover_cursor);
})
 */
