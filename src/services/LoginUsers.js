import { http } from "./HttpRequest";

export default function LoginUsers (data) {
    return http.post('/user/login' , data);
}
