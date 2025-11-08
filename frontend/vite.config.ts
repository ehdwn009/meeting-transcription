import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 1. Capacitor를 위한 설정 추가 (하이브리드 앱용)
      base: './',

      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // 2. 확장성을 위한 경로 별칭 수정
          // '@': path.resolve(__dirname, '.'), // <-- 이 줄은 삭제하거나 주석 처리
          '@': path.resolve(__dirname, './src'), // <-- 이 줄로 변경
        }
      }
    };
});