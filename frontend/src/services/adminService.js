import axios from "axios";

const API_URL = "http://localhost:8080/admin/";

class AdminService {
    getAllAdmins(){
        return axios.get(API_URL)
    }

    deleteAdmin(id){
        axios.delete(`${API_URL}${id}`).then(response=>{
            window.location.reload("/admin");
        })
    }
}

export default new AdminService();
