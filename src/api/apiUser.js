import instance from './ApiConfig'

const changePassword = (id, body) => {
    return instance.put(`/api/v1/user/${id}`, body)
};

export { changePassword }