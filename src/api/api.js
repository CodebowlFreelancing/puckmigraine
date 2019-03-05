import http from './http'

const endpoints = {
  entries: '/entries',
}

const createPayload = (method, body) => ({
  method,
  body: JSON.stringify(body),
})

export const postEntry = entry => http.fetchAsJSON(endpoints.entries, createPayload(http.method.POST, entry))
