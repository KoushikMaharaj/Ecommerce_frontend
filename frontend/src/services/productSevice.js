import axios from "axios";

const CTG_URL = "http://localhost:8080/category/";
const SUBCTG_URL = "http://localhost:8080/subcategory/";
const PROD_URL = "http://localhost:8080/product/";
const CART_URL = "http://localhost:8080/cart/";

class ProductService {
  addCategory(category) {
    return axios.post(CTG_URL, category);
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
    uploadData.append("prodImage", image);
    uploadData.append("product", JSON.stringify(product));
    return axios.post(PROD_URL, uploadData);
  }

  getAllProducts() {
    return axios.get(PROD_URL);
  }

  getProductDetail(id) {
    return axios.get(`${PROD_URL}${id}`);
  }

  getProductByCategory(ctgName) {
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
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    if (user === null) {
      window.location.assign("/login");
    }
    axios.post(`${CART_URL}addtocart/${user.id}/${pid}`).then((response) => {
      window.location.assign("/product");
    });
  }

  showCart() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    return axios.get(`${CART_URL}${user.id}`);
  }

  removeProductFromCart(cartId, pid) {
    axios.get(`${CART_URL}removeproduct/${cartId}/${pid}`).then((response) => {
      window.location.reload("/showcart");
    });
  }
}

export default new ProductService();
