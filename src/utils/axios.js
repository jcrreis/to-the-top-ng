import axios from 'axios'

axios.defaults.withCredentials = true,
axios.defaults.xsrfCookieName = 'csrftoken',
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"


export default axios;


//document.querySelector('meta[name="csrf-token"]').getAttribute('content')