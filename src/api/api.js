import http from './http'

const endpoints = {
  entry: '/entry',
}

const createPayload = (method, body) => ({
  method,
  body: JSON.stringify(body),
})

export const postEntry = entry => http.fetchAsJSON(endpoints.entry, createPayload(http.method.POST, entry))
