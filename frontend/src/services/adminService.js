import axios from "axios";

const API_URL = "http://localhost:8080/admin/";

class AdminService {
    getAllAdmins(){
        return axios.get(API_URL)
    }
}

export default new AdminService();
