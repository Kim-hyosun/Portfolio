/** 메뉴 toggle 기능 생성 */
(function showMenu() {
  const menuOpen = document.querySelector<HTMLElement>(
    'header .icons .menuBtn',
  )!;
  const menuPage = document.querySelector<HTMLElement>('.menuPage')!;
  const menuClose = document.querySelector<HTMLElement>(
    '.menuPage .topline .menuClose',
  )!;
  menuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    menuPage.classList.add('active');
    menuPage.classList.remove('none');
    document.body.classList.add('noScroll');
  });
  menuClose.addEventListener('click', (e) => {
    e.preventDefault();
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
    document.body.classList.remove('noScroll');
  });
})();

/** 메뉴로 원하는 내부 페이지로 이동하기 */
(function toPAGE() {
  const menuWork = document.querySelector<HTMLElement>('#toWORK')!;
  const menuAbout = document.querySelector<HTMLElement>('#toABOUT')!;
  const menuPage = document.querySelector<HTMLElement>('.menuPage')!;

  const closeMenu = () => {
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
    document.body.classList.remove('noScroll');
  };

  menuWork.addEventListener('click', closeMenu);
  menuAbout.addEventListener('click', closeMenu);
})();

/** darkmode & lightmode — localStorage + prefers-color-scheme */
(function pageModeToggle() {
  const STORAGE_KEY = 'portfolio-theme';
  const turnOff = document.querySelector<HTMLElement>(
    'header .icons .darkBtn',
  )!;
  const turnOn = document.querySelector<HTMLElement>(
    'header .icons .lightBtn',
  )!;

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = saved ? saved === 'dark' : prefersDark;

  if (shouldBeDark) document.body.classList.add('dark');

  turnOff.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('dark');
    localStorage.setItem(STORAGE_KEY, 'dark');
  });
  turnOn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('dark');
    localStorage.setItem(STORAGE_KEY, 'light');
  });
})();

/** drowing path — 스크롤 위치에 따라 SVG path stroke 노출량 조절 */
(function drowingPath() {
  const wrap1 = document.querySelector<HTMLElement>('.bg1')!;
  const path1 = document.querySelector<SVGPathElement>('#drowingIMG1')!;
  const pathLength1 = path1.getTotalLength();

  const wrap2 = document.querySelector<HTMLElement>('.bg2')!;
  const path2 = document.querySelector<SVGPathElement>('#drowingIMG2')!;
  const pathLength2 = path2.getTotalLength();

  path1.style.strokeDasharray = String(pathLength1);
  path1.style.strokeDashoffset = String(
    calcDashoffset(window.innerHeight - wrap1.offsetTop, wrap1, pathLength1),
  );

  path2.style.strokeDasharray = String(pathLength2);
  path2.style.strokeDashoffset = String(
    calcDashoffset(window.innerHeight, wrap2, pathLength2),
  );

  function calcDashoffset(
    scrollY: number,
    element: HTMLElement,
    length: number,
  ): number {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - length * ratio;
    return value < 0 ? 0 : value > length ? length : value;
  }

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY1 = window.scrollY + window.innerHeight * 0.6;
        const scrollY2 = window.scrollY + window.innerHeight * 0.7;
        path1.style.strokeDashoffset = String(
          calcDashoffset(scrollY1, wrap1, pathLength1),
        );
        path2.style.strokeDashoffset = String(
          calcDashoffset(scrollY2, wrap2, pathLength2),
        );
        ticking = false;
      });
    },
    { passive: true },
  );
})();

/** main drowing path animation — CSS variable로 path length 전달 */
(function drowMainPath() {
  const mainPath = document.querySelector<SVGPathElement>('#mainpath')!;
  const mainPathlength = mainPath.getTotalLength();
  mainPath.style.setProperty('--length', String(mainPathlength));
})();
