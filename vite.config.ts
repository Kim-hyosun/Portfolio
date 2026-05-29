import { defineConfig } from 'vite';

// GitHub Pages 서브패스(Kim-hyosun.github.io/Portfolio/) 대응.
// dev 서버는 루트로 띄우고, build 결과만 /Portfolio/ 베이스로 빌드.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // 파비콘/이미지 등 작은 파일도 base64 인라인하지 말고 별도 파일로
  },
}));
