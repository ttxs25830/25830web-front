import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { decode } from 'urlsafe-base64'

createApp(App).use(store).use(router).mount('#app')

const opath = decode(location.search.match(/(^|&)b64p=([^&]*)(&|$)/)[0])
const oquery = (
  parmlist = decode(location.search.match(/(^|&)b64q=([^&]*)(&|$)/)[0]).split(
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
