// import axios from "axios";
import { API } from "../../config";
import { RequestApi } from "../../interfaces";
import { MoviesData } from "../../mock";


export class ApiService {
    private readonly baseUrl: string;

    constructor(private readonly api: keyof typeof API){
        this.baseUrl = API[this.api];
    }

    public async get(request: RequestApi){
        try {
            //We would use this configuration if a real endpoint were used.
            //const res = await axios.get(this.baseUrl + request.url, request.config);
            //So, we will be simulate a Promise.
            const res = await new Promise((resolve)=>{
                setTimeout(() => {
                    resolve(MoviesData) 
                }, 1500)
            })
            return res;
        } catch (error) {
            console.error("🚀 ~ ApiService ~ get ~ error:", error);
            throw error;
        }
    }
}