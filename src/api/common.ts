import axios from "axios";
let apiEndpoint = "";
let apiVersion = "";
if (import.meta.env.VITE_APP_API_ENDPOINT && typeof import.meta.env.VITE_APP_API_ENDPOINT === "string") {
    apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT;
}
if (import.meta.env.VITE_APP_API_VERSION && typeof import.meta.env.VITE_APP_API_VERSION === "string") {
    apiVersion = import.meta.env.VITE_APP_API_VERSION;
}

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
