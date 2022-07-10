import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { fromBase64 as b64Decode } from 'js-base64'

createApp(App).use(store).use(router).mount('#app')

const rPathParm = location.search.match(/(^|&)b64p=([^&]*)(&|$)/)
if (rPathParm) {
  const opath = b64Decode(rPathParm[2])
  const rQueryParm = location.search.match(/(^|&)b64q=([^&]*)(&|$)/)
  if (rQueryParm) {
    const oquery = (parmlist = b64Decode(rQueryParm[2]).split('&')) => {
      const dict = {}
      for (const i in parmlist) {
        const pair = i.split('=')
        dict[pair[0]] = pair[1]
      }
      return dict
    }
    router.push({
      path: opath,
      query: oquery
    })
  } else {
    router.push({
      path: opath
    })
  }
}
