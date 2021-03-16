import axios from "axios";

const API_URL = "http://localhost:8080/user/";

class UserServices {
  userLogin(user) {
    axios.post(API_URL + "login", user).then((response) => {
      console.log(response.data);
      window.localStorage.setItem("user", JSON.stringify(response.data));
    });
  }

  userRegister(user) {
    axios.post(`${API_URL}register`, user).then((response) => {
      console.log(response.data);
    });
  }
}

export default new UserServices();
