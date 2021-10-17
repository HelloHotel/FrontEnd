import http from "./http-common"

class HotelsApiService {
    getAll(){
        return http.get("/hotels");
    }

    getById(id){
        return http.get(`/hotels/${id}`);

    }
    create(data){
        return http.post("/hotels", data);
    }
    update(id, data){
        return http.put(`/hotels/${id}`, data);
    }
    delete(id){
        return http.delete(`/hotels/${id}`);
    }
    findByTitle(title){
        return http.get( `/hotels?title=${title}`);
    }
}

export default new HotelsApiService();