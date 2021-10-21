import http from "./http-common"

class EventsApiServices {
    getAll(){
        return http.get("/events");
    }

    getById(id){
        return http.get(`/events/${id}`);

    }
    create(data){
        return http.post("/events", data);
    }
    update(id, data){
        return http.put(`/events/${id}`, data);
    }
    delete(id){
        return http.delete(`/events/${id}`);
    }
}
export default new EventsApiServices();