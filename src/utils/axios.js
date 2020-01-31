import axios from 'axios'

//axios.defaults.xsrfCookieName = 'csrftoken'
//axios.defaults.xsrfHeaderName = "CSRF-TOKEN"
axios.defaults.withCredentials = true;

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'New-Header': '123'

};
export default axios;

