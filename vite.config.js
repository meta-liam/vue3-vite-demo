import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',//Specify the output directory (relative to project root).
  }
});


// export default {
//     base:'./',
//     //生产模式打包配置
//     build: {
//         outDir: 'dist',//Specify the output directory (relative to project root).
//     }
// }
