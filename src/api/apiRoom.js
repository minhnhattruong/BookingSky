import instance from './ApiConfig'

const getRoomById = (id) => {
    return instance.get(`/api/v1/rooms/${id}`)
};

export { getRoomById }