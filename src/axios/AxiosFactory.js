import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export default class AxiosFactory {
    static createInstance(config) {
        console.log(config);
        // const basePath = "https://hrms-backend-04fw.onrender.com/";
        const basePath = "https://chawlacomponents.com/";
        const _config= {
            ...config,
            baseURL: basePath + (config?.baseURL || "")
        };
        return axios.create(_config);
    }
}
