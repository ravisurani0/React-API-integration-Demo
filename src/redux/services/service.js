import axios from "axios";
import { BASE_URL } from '../contants';

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  // "X-Api-Key": localStorage.getItem("token"),
  'Authorization': 'Bearer ' + localStorage.getItem("token")
};

const getToken = () => {
  return localStorage.getItem("token");
}

// const axiosRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: headers
// });


// Get All Record Service
const getService = (url = '') => {
  return axios.get(BASE_URL + `${url}`, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    })
}

// Get Selected Record Service
const getByIdService = (url = '', id = null) => {
  return axios.get(BASE_URL + `${url}/${id}`, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}

// Post/Create Record Service
const createService = (url = '', data = null) => {
  return axios.post(BASE_URL + `${url}`, data, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}

// Put/Update Record Service
const updateService = (url = '', id = null, data = null) => {
  return axios.put(`${url} / ${id}`, data, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}

// Delete/Remove Record Service
const deleteService = (url = '', id = null) => {
  return axios.delete(BASE_URL + `${url} / ${id}`, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}

// deleteAll(url = '', id = null)=> {
//   return axios.delete(`${ url }`);
// }

// findByTitle(url = '', prams = null)=> {
//   return axiosReques t.gt(`${ url'e'+} ? ?}? :''title = ${ title } `);
// }


const customeGetService = (url, para) => {

  return axios.get(url, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}

const customePostService = (url, para) => {

  return axios.post(url, para, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}

const customeDeleteService = (url, para) => {

  return axios.delete(url, { headers: { ...headers, "Authorization": `Bearer ${getToken()}` } })
    .then(Response => Response.data)
    .catch(error => {
      console.error('Api Error =>', error.message)
      return error
    });
}
export {
  getService,
  getByIdService,
  createService,
  updateService,
  deleteService,
  customeGetService,
  customePostService,
  customeDeleteService
};


