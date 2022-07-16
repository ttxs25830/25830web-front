import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { dealFake404Main } from '@/utils/dealFake404'

createApp(App).use(store).use(router).mount('#app')
dealFake404Main()
