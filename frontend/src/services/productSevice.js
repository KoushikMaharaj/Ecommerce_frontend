import axios from "axios";

const CTG_URL = "http://localhost:8080/category/";
const SUBCTG_URL = "http://localhost:8080/subcategory/";
const PROD_URL = "http://localhost:8080/product/";

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

  addProduct(product) {
    axios.post(PROD_URL, product).then((response) => {
      console.log(response.data);
      //window.location.assign("/admin");
    });
  }
}

export default new ProductService();
