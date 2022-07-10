import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Base64 from 'js-base64'

createApp(App).use(store).use(router).mount('#app')

const opath = Base64.fromBase64(location.search.match(/(^|&)b64p=([^&]*)(&|$)/)[2])
const oquery = (
  parmlist = Base64.fromBase64(location.search.match(/(^|&)b64q=([^&]*)(&|$)/)[2]).split(
    '&'
  )
) => {
  const dict = {}
  for (const i in parmlist) {
    const pair = i.split('=')
    dict[pair[0]] = pair[1]
  }
  return dict
}
router.push({
  path: opath,
  query: oquery || undefined
})
