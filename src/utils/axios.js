import axios from 'axios'

axios.defaults.withCredentials = true,
axios.defaults.xsrfCookieName = 'csrftoken',
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;


//document.querySelector('meta[name="csrf-token"]').getAttribute('content')