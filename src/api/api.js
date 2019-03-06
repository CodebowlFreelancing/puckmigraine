import http from './http'

const endpoints = {
  entries: '/entries',
}

const createPayload = (method, body) => ({
  method,
  body: JSON.stringify(body),
})

export const getDateEntries = dateIdentifier =>
  http.fetchAsJSON(
    `${endpoints.entries}?year=${dateIdentifier.year}&month=${dateIdentifier.month}&dayOfMonth=${
      dateIdentifier.dayOfMonth
    }`,
    {method: http.method.GET}
  )

export const postEntry = entry => http.fetchAsJSON(endpoints.entries, createPayload(http.method.POST, entry))
