import axios from "axios";

const ORDER_URL = "http://localhost:8080/order/";

class OrderService {
  placeOrder(pid,qty) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    axios.post(`${ORDER_URL}${user.id}/${pid}/${qty}`).then((response) => {
      console.log(response.data);
      window.location.assign("/product")
    });
  }

  placeCartOrder(id){
    axios.post(`${ORDER_URL}cartorder/${id}`).then(response=>{
      console.log(response.data);
      window.location.assign("/product")
    })
  }

  getOrdersByCustomer(id){
    return axios.get(`${ORDER_URL}${id}`)
  }
}

export default new OrderService();
