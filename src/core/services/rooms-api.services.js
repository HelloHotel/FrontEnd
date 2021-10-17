import http from "./http-common"

class RoomsApiService {
    getAll(){
        return http.get("/rooms");
    }

    getById(id){
        return http.get(`/rooms/${id}`);

    }
    create(data){
        return http.post("/rooms", data);
    }
    update(id, data){
        return http.put(`/rooms/${id}`, data);
    }
    delete(id){
        return http.delete(`/rooms/${id}`);
    }
    findByTitle(title){
        return http.get( `/rooms?title=${title}`);
    }
}

export default new RoomsApiService();
