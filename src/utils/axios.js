import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN"
axios.defaults.withCredentials = true;

export default axios;
