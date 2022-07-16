import { fromUint8Array as b64Encode, fromBase64 as b64Decode } from 'js-base64'
import router from '@/router'

export const dealFake404Redirect = () => {
  /** 编码路径 */
  const b64p = b64Encode(
    new Uint8Array(new TextEncoder().encode(decodeURI(location.pathname))),
    true
  )
  /** 编码查询参数 */
  const b64q = b64Encode(
    new Uint8Array(
      new TextEncoder().encode(decodeURI(location.search.substring(1)))
    ),
    true
  )
  /** 将参数附带在查询参数中跳转到主页面 */
  location.replace(
    `${location.protocol}//${location.hostname}${
      location.port ? ':' + location.port : ''
    }/?b64p=${b64p}${b64q ? '&b64q=' + b64q : ''}`
  )
}
export const dealFake404Main = () => {
  const b64Path = location.search.match(/(^|&|\?)b64p=([^&]*)(&|$)/)
  const b64Query = location.search.match(/(^|&|\?)b64q=([^&]*)(&|$)/)
  if (b64Path) {
    // 如果存在假404处理请求
    const path = b64Decode(b64Path[2])
    if (b64Query) {
      // 如果请求中存在查询参数
      const query = ((queryString: string) => {
        const queryDict: { [index: string]: string } = {}
        const parmList = queryString.split('&')
        for (const parmString in parmList) {
          const cutIndex = parmString.indexOf('=')
          const key = parmString.substring(0, cutIndex)
          const value = parmString.substring(cutIndex + 1)
          queryDict[key] = value
        }
        return queryDict
      })(b64Decode(b64Query[2]))
      router.replace({
        path: path,
        params: query
      })
    }
    router.replace({
      path: path
    })
  }
}
