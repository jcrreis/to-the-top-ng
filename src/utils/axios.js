import axios from 'axios'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.withCredentials = true;

export default axios;


//document.querySelector('meta[name="csrf-token"]').getAttribute('content')