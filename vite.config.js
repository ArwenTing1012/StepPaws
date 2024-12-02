import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/StepPaws/',  // 添加這行，使用你的 repo 名稱
})