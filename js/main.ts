// 단일 진입점. 기존 IIFE 기반 사이드 이펙트 모듈들을 import해서 한꺼번에 실행시킨다.
// (각 파일이 ES module이라 자체적으로 스코프가 격리됨 — IIFE 안 써도 동일 효과)

import './index';
import './cursor';
import './email';

// 기존 inline <script>에 있던 emailjs.init 호출은 여기로 옮긴다.
// (CDN의 emailjs 전역 객체는 js/types.d.ts에 ambient 선언으로 알려둠)
emailjs.init('U1Y7l1h_pZwNrwc4F');

// 초기 로딩 오버레이 제거 — 모든 자산 로드 완료 후 1.4s 뒤.
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading')?.classList.add('remove');
    document.body.classList.remove('noScroll');
  }, 1400);
});
