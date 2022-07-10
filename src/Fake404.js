import { encode } from 'urlsafe-base64'
const b64p = encode(location.pathname)
const b64q = encode(location.search.substring(1))
location.replace(
  `${location.protocol}//${location.hostname}${
    location.port ? ':' + location.port : ''
  }/?b64p=${b64p}&b64q=${b64q}`
)
