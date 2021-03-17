import axios from "axios";

const API_URL = "http://localhost:8080/user/";

class UserServices {
  userLogin(user) {
    axios.post(API_URL + "login", user).then((response) => {
      console.log(response.data);
      window.localStorage.setItem("user", JSON.stringify(response.data));
      if (response.data.role === "ADMIN") {
        console.log("admin logged");
        window.location.assign("/admin");
      } else {
        window.location.assign("/");
      }
    });
  }

  userRegister(user) {
    axios.post(`${API_URL}register`, user).then((response) => {
      console.log(response.data);
      window.location.assign("/login");
    });
  }
}

export default new UserServices();
