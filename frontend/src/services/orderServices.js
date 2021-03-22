import axios from "axios";

const ORDER_URL = "http://localhost:8080/order/";

class OrderService {
  placeOrder(pid) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    axios.post(`${ORDER_URL}${user.id}/${pid}`).then((response) => {
      console.log(response.data);
    });
  }
}

export default new OrderService();
