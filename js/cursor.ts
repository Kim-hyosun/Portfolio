const cursorParent = document.getElementById('mouseCursor')!;
const cursorChild = cursorParent.children[0] as HTMLElement;
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);

let scale = 1; // textmode일때
let stage = ''; // switch문이 불필요하게 실행되지 않도록하기위해 작성
let cursorX = 0;
let cursorY = 0;

function mouseMove(e: MouseEvent) {
  cursorX = e.pageX - cursorParent.offsetWidth / 2; // 커서위치
  cursorY = e.pageY - cursorParent.offsetHeight / 2;
  cursorParent.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

  // e.target은 EventTarget | null. 실제로는 hover된 DOM element라서 Element로 좁힌다.
  const target = e.target as Element | null;
  if (!target) return;

  switch (target.getAttribute('data-cursor')) {
    case 'click':
      if (stage === 'click') return;
      scale = 2;
      stage = 'click';
      cursorChild.setAttribute('data-name', '');
      cursorParent.className = '';
      break;
    case 'link':
      if (stage === 'link') return;
      scale = 3;
      stage = 'link';
      cursorChild.setAttribute(
        'data-name',
        target.getAttribute('data-name') ?? '',
      );
      cursorParent.className = 'cursor-text-mode';
      break;

    default:
      if (stage === '') return;
      scale = 1;
      stage = '';
      cursorChild.setAttribute('data-name', '');
      cursorParent.className = '';
      break;
  }
  cursorChild.style.setProperty('--cursor-scale', String(scale));
}

function mouseDown() {
  scale *= 0.8;
  cursorChild.style.setProperty('--cursor-scale', String(scale));
}

function mouseUp() {
  scale *= 1.25;
  cursorChild.style.setProperty('--cursor-scale', String(scale));
}
