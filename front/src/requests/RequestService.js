import { api } from "../services/auth-service";

export default class RequestService {
    static async postLogin() {
        try {
            const response = await api.post()
            return
        } catch (e){
            console.log(e)
        }
    }
}