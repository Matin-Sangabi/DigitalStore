import { http } from "./HttpRequest";

export function getProducts () {
    return http.get("/product");
}