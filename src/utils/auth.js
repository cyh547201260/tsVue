import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

const TokenTypeKey = 'vue_admin_template_token_type'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getTokenType() {
  return Cookies.get(TokenTypeKey)
}

export function setTokenType(tokenType) {
  return Cookies.set(TokenTypeKey, tokenType)
}

export function removeTokenType() {
  return Cookies.remove(TokenTypeKey)
}


