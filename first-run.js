import http from 'k6/http'

export let options = {
  duration: '60m',
  vus: 1
}

export default function () {
  const response = http.get('https://test-api.k6.io/')
}
