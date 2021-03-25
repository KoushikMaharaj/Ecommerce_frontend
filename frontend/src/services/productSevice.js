import axios from "axios";

const CTG_URL = "http://localhost:8080/category/";
const SUBCTG_URL = "http://localhost:8080/subcategory/";
const PROD_URL = "http://localhost:8080/product/";
const CART_URL = "http://localhost:8080/cart/";

class ProductService {
  addCategory(category) {
    axios.post(CTG_URL, category).then((response) => {
      console.log(response.data);
      window.location.assign("/admin");
    });
  }

  getAllCategories() {
    return axios.get(CTG_URL);
  }

  addSubCategory(subcategory) {
    axios.post(SUBCTG_URL, subcategory).then((response) => {
      console.log(response.data);
      window.location.assign("/admin");
    });
  }

  getAllSubCategories() {
    return axios.get(SUBCTG_URL);
  }

  addProduct(product, image) {
    const uploadData = new FormData();
    console.log(image);
    uploadData.append("prodImage", image);
    console.log(`sending ${JSON.stringify(product)}`);
    uploadData.append("product", JSON.stringify(product));
    axios.post(PROD_URL, uploadData).then((response) => {
      console.log(response.data);
      window.location.assign("/admin");
    });
  }

  getAllProducts() {
    return axios.get(PROD_URL);
  }

  getProductDetail(id) {
    return axios.get(`${PROD_URL}${id}`);
  }

  getProductByCategory(ctgName) {
    console.log(ctgName);
    return axios.get(`${PROD_URL}category/${ctgName}`);
  }

  getProductBySubCategory(subCtgName) {
    return axios.get(`${PROD_URL}subcategory/${subCtgName}`);
  }

  updateProduct(prodDTO) {
    axios.put(`${PROD_URL}update`, prodDTO).then((response) => {
      window.location.assign("/admin");
    });
  }

  addToCart(pid) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user === null) {
      window.location.assign("/login");
    }
    console.log(user.id);
    axios.post(`${CART_URL}addtocart/${user.id}/${pid}`).then((response) => {
      console.log(response.data);
      window.location.assign("/product");
    });
  }

  showCart() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user.id);
    return axios.get(`${CART_URL}${user.id}`);
  }

  removeProductFromCart(cartId, pid) {
    console.log(cartId, pid);
    axios.get(`${CART_URL}removeproduct/${cartId}/${pid}`).then((response) => {
      console.log(response.data);
      window.location.reload("/showcart");
    });
  }
}

export default new ProductService();
