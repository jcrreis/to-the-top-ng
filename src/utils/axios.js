import axios from 'axios'

//axios.defaults.xsrfCookieName = 'csrftoken'
//axios.defaults.xsrfHeaderName = "CSRF-TOKEN"
axios.defaults.withCredentials = true;

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  

};
export default axios;


//document.querySelector('meta[name="csrf-token"]').getAttribute('content')