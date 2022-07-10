import { fromUint8Array as b64Encode } from 'js-base64'
const b64p = b64Encode(new Uint8Array(decodeURI(location.pathname)), true)
const b64q = b64Encode(new Uint8Array(decodeURI(location.search.substring(1))), true)
location.replace(encodeURI(
  `${location.protocol}//${location.hostname}${
    location.port ? ':' + location.port : ''
  }/?b64p=${b64p}&b64q=${b64q}`
))
