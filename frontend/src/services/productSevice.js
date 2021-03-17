import axios from "axios";

const CTG_URL = "http://localhost:8080/category/";
const SUBCTG_URL = "http://localhost:8080/subcategory/";

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
}

export default new ProductService();
