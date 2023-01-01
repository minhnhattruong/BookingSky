import instance from './ApiConfig'

const getSearchHotels = (city, min, max) => {
    return instance.get(`/api/v1/hotel?city=${city}&min=${min}&max=${max}`);
};

const getHotelbyId = (id) => {
    return instance.get(`/api/v1/hotel/find/${id}`);
};

const getRoombyIdHotel = (id, startDate, endDate) => {
    return instance.get(`/api/v1/hotel/room/${id}?startDate=${startDate}&endDate=${endDate}`);
};


export { getSearchHotels, getHotelbyId, getRoombyIdHotel }