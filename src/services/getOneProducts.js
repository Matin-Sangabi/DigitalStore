import { http } from "./HttpRequest";

export function getOneProducts (id) {
    return http.get(`/product/${id}`);
}