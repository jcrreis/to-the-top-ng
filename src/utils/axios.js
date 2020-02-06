import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "CSRF-TOKEN"
axios.defaults.withCredentials = true;

export default axios;


//document.querySelector('meta[name="csrf-token"]').getAttribute('content')