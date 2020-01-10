import axios from 'axios'

axios.defaults.xsrfCookieName = 'XSRF-Token'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.withCredentials = true;


export default axios;
