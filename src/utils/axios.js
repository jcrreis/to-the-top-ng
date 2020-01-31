import axios from 'axios'

//axios.defaults.xsrfCookieName = 'csrftoken'
//axios.defaults.xsrfHeaderName = "CSRF-TOKEN"
axios.defaults.withCredentials = true;

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  'New-Header': '123'

};
export default axios;

X-CSRFTOKEN
