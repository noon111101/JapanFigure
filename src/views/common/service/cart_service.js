import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/cart';

export default {
  getCart(userName) {
    return axios.get(API_URL + '/'+ userName);
  },

  getProduct(id) {
    return axios.get(API_URL + 'products/' + id);
  },

  createProduct(product) {
    return axios.post(API_URL + 'products', product);
  },

  updateCart(id, amount) {
    return axios.put(API_URL + '/update/' + id +"?amount="+ amount);
  },

  deleteCart(id) {
    return axios.delete(API_URL + '/' + id);
  }
};