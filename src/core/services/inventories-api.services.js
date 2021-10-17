import http from "./http-common"

class InventoriesApiService {
    getAll(){
        return http.get("/inventories");
    }

    getById(id){
        return http.get(`/inventories/${id}`);

    }
    create(data){
        return http.post("/inventories", data);
    }
    update(id, data){
        return http.put(`/inventories/${id}`, data);
    }
    delete(id){
        return http.delete(`/inventories/${id}`);
    }
    findByTitle(title){
        return http.get( `/inventories?title=${title}`);
    }
}

export default new InventoriesApiService();
