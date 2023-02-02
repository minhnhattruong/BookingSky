import instance from './ApiConfig'

const getAllPlaces = () => {
    return instance.get(`/api/v1/places/`)
};


export { getAllPlaces }