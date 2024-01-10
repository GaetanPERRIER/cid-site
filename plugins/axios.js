export default function ({ $axios }) {
  // This is a nuxt specific instance config, this will work in
  // everyplace where nuxt inject axios, like Vue components, and store
  $axios.defaults.xsrfHeaderName = 'x-csrftoken'
  $axios.defaults.xsrfCookieName = 'csrfToken'
  $axios.defaults.withCredentials = true
}

