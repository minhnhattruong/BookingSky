import instance from './ApiConfig'

const bookingRoom = (id, body) => {
    return instance.put(`/api/v1/rooms/updateAvailability/${id}`, body)
};

const getAllBooking = () => {
    return instance.get(`/api/v1/bookings`)
}

const cancelBooking = (id) => {
    return instance.put(`/api/v1/bookings/${id}`)
}

export { bookingRoom, getAllBooking, cancelBooking }