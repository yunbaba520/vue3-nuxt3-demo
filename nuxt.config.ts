// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "normalize.css",
    "@/assets/css/global.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 自动的给  scss 模块首行添加额外的数据:@use "@/assets/styles/variables.scss" as *;
          additionalData: '@use "@/assets/css/variables.scss" as *;',
        },
      },
    },
  },
})
