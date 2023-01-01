import instance from "./ApiConfig";

const login = (params) => {
    return instance.post('/api/v1/login', params)
}

const register = body => {

    return instance.post(`/auth/save/user`, body);
};


export { login, register }