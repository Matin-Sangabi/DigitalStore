import {http} from './HttpRequest';

export function SignInUsers(data) {
    return http.post("/user/register" , data);
}