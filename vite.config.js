// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import legacy from '@vitejs/plugin-legacy';
 
// // https://vitejs.dev/config/
// export default defineConfig({
// 	base: './',
// 	plugins: [
// 		vue(),
// 		legacy({
// 			targets: ['ie>=11'],
// 			additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
// 		}),
// 	],
// });

export default {
    base:'./',
    //生产模式打包配置
    build: {
        outDir: 'dist',//Specify the output directory (relative to project root).
    }
}
