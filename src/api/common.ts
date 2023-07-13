import axios from "axios";
const apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT;
const apiVersion = import.meta.env.VITE_APP_API_VERSION;

export const commonApi = ({
    method,
    path,
    headers,
    params,
    data,
    options,
}: {
    method: "GET" | "POST" | "OPTIONS" | "PUT" | "DELETE",
    path: string,
    headers?: object | null,
    params?: object | null,
    data?: object | null,
    options?: object | null,
}) => {
    return axios({
        method,
        url: `${apiEndpoint}/${apiVersion}/${path}`,
        headers: headers || {},
        params: params || {},
        data,
        ...options,
    });
};
