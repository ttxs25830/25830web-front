import { encode as enub64, decode as deub64 } from 'urlsafe-base64'

export const encode = (str) => {
  return enub64(Buffer.from(str))
}

export const decode = (ub64) => {
  return deub64(ub64).toString()
}
