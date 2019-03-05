import {encaseP2, tryP} from 'fluture'

const fetchf = encaseP2(window.fetch)

const getFetchOptions = (options = {headers: {}}) => ({
  ...options,
  credentials: 'same-origin',
  headers: new Headers({
    ...options.headers,
  }),
})

const localFetch = (url, options) => fetchf(encodeURI(url), getFetchOptions(options))

export const asJSON = response => tryP(() => response.json())

const checkResponseContentType = contentType => response => {
  const responseContentType = response.headers.get('content-type')
  if (responseContentType && responseContentType.includes(contentType)) {
    return response
  }

  throw new Error(`Content-Type does not match. Response: "${responseContentType}"; expected: "${contentType}".`)
}

const fetchAs = (contentType, parser) => (url, options = {headers: {}}) => {
  const optionsWithContentType = {...options, headers: {...options.headers, 'content-type': contentType}}
  return localFetch(url, optionsWithContentType)
    .map(checkResponseContentType(contentType))
    .chain(parser)
}

const fetchAsJSON = fetchAs('application/json', asJSON)

const method = {
  GET: 'GET',
  POST: 'POST',
}

export default {
  method,
  fetchAsJSON,
}
