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
}

export default new UserServices();
