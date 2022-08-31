import { http } from "./HttpRequest";

export function getOneProducts (id) {
    console.log(id)
    return http.get(`/product/${id}`);
}