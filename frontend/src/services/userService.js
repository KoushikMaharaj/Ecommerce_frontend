import axios from "axios";

const API_URL = "http://localhost:8080/user/";

class UserServices {
  userLogin(user) {
    return axios.post(API_URL + "login", user);
  }

  userRegister(user) {
    return axios.post(`${API_URL}register`, user);
  }

  userUpdate(user) {
    return axios.put(`${API_URL}update`, user);
  }

  updateUserAddress(userDTO) {
    return axios.put(`${API_URL}update/address`, userDTO);
  }

  updateUserPassword(userDTO) {
    return axios.put(`${API_URL}update/password`, userDTO);
  }

  getUserByEmail(email) {
    return axios.post(`${API_URL}${email}`);
  }
}

export default new UserServices();
