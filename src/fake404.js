import Base64 from 'js-base64'
const b64p = Base64.fromUint8Array(decodeURI(location.pathname), true)
const b64q = Base64.fromUint8Array(decodeURI(location.search.substring(1)), true)
location.replace(encodeURI(
  `${location.protocol}//${location.hostname}${
    location.port ? ':' + location.port : ''
  }/?b64p=${b64p}&b64q=${b64q}`
))
