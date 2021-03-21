import axios from "axios";

const CTG_URL = "http://localhost:8080/category/";
const SUBCTG_URL = "http://localhost:8080/subcategory/";
const PROD_URL = "http://localhost:8080/product/";
const CART_URL = "http://localhost:8080/cart/"

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

  getAllProductImages(){
    return axios.get(`${PROD_URL}images`);
  }

  getAllProducts() {
    return axios.get(PROD_URL);
  }

  getProductDetail(id) {
    return axios.get(`${PROD_URL}${id}`);
  }

  /* addToCart(product){    
    axios.post(`${CART_URL}addtocart`,uploadData).then(response=>{
      console.log(response.data);
    }) */
  //}

}

export default new ProductService();
