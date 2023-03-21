import axios from "axios";

const API_URL = 'http://localhost:8080/api/products/';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getOneProduct(id) {
    return axios.get(API_URL + 'detail/',{ params: { id: id } });
  }
};
