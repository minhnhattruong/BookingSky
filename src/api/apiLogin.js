import instance from "./ApiConfig";

const login = (params) => {
    return instance.post('/api/v1/login', params)
}

const register = body => {

    return instance.post(`/api/v1/register`, body);
};

const getUserInfo = (id) => {
    return instance.get(`/api/v1/user/${id}`);
}


export { login, register, getUserInfo }