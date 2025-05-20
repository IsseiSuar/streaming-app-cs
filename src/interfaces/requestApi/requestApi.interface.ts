import { AxiosRequestConfig } from "axios";

export interface RequestApi<T = any> {
    url: string;
    data?: T;
    config?: AxiosRequestConfig<T>
}