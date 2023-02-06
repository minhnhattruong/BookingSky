import instance from './ApiConfig'

const changePassword = (id, body) => {
    return instance.put(`/api/v1/user/${id}`, body)
};

const updateUser = (id, body) => {
    return instance.put(`api/v1/user/update/${id}`, body)
}

export { changePassword, updateUser }