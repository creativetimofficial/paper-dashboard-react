// import axios from 'axios';
// import { store } from '../redux/store';


// //////////////////////////////////////////////////////////////////////

// const axiosApiInstance = axios.create();

// // Request interceptor for API calls
// axiosApiInstance.interceptors.request.use(
//   async (config) => {
//     config.headers = {
//       Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//     };
//     // config.timeout = 10000;
//     return config;
//   },
//   (error) => error.response?.data || 'Something went wrong'
// );

// // Response interceptor for API calls
// axiosApiInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 403 || error.response.status === 401) {
//       if (error.response.statusText === 'Unauthorized') {
//         store.dispatch({ type: 'USER_LOGOUT' });
//       }
//     }

//     // if (error.response.status === 500) {
//     //   window.location.href = `/${process.env.REACT_APP_BASE_NAME}/500`;
//     // }

//     throw error.response?.data ? error.response : 'Something went wrong';
//   }
// );

// export default axiosApiInstance;
