import axios from "axios";

const API_URL = "http://localhost:8080/user/";

class UserServices {
  userLogin(user) {
    return axios.post(API_URL + "login", user);
  }

  userRegister(user) {
    axios.post(`${API_URL}register`, user).then((response) => {
      console.log(response.data);
      if (response.data.role === "ADMIN") {
        window.location.assign("/admin");
      } else {
        window.location.assign("/login");
      }
    });
  }
}

export default new UserServices();
