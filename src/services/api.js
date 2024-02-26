// /* eslint-disable import/no-anonymous-default-export */
// // Don't repeat urself

// import axiosApiInstance from './interceptor';

// /////////////////////////////////////////////////////////////////////////

// export default {
//   methods: {
//     getData(PATH) {
//       return new Promise((resolve, reject) => {
//         axiosApiInstance
//           .get(`${PATH}`)
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//     getDataWithOptions(PATH, options) {
//       return new Promise((resolve, reject) => {
//         axiosApiInstance
//           .get(`${PATH}`, options)
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//     postData(PATH, payload) {
//       return new Promise((resolve, reject) => {
//         // axiosApiInstance
//           .post(`${PATH}`, payload)
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//     patchData(PATH, payload) {
//       return new Promise((resolve, reject) => {
//         axiosApiInstance
//           .patch(`${PATH}`, payload)
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error.resopnse);
//           });
//       });
//     },
//     deleteData(PATH) {
//       return new Promise((resolve, reject) => {
//         axiosApiInstance
//           .delete(`${PATH}`)
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//     putData(PATH, payload) {
//       return new Promise((resolve, reject) => {
//         axiosApiInstance
//           .put(`${PATH}`, payload)
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error.resopnse);
//           });
//       });
//     }
//   }
// };

// src/api.js
import axios from "axios";

const BASE_URL = "http://172.235.10.116:9090"; // Replace with your API base URL

const api = axios.create({
  baseURL: BASE_URL,
});

// Add an interceptor to dynamically set the Authorization header before each request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // If the accessToken exists, set the Authorization header
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default api;

