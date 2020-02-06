import axios from 'axios'

axios.defaults.withCredentials = true,
axios.defaults.xsrfCookieName = 'XSRF-TOKEN',
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"


export default axios;


//document.querySelector('meta[name="csrf-token"]').getAttribute('content')