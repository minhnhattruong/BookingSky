import instance from './ApiConfig'
import { useSelector } from 'react-redux';

const getAllFavorite = (userId) => {
    return instance.get(`/api/v1/favorite/${userId}`)
};

const addFavoriteHotel = (userId, idHotel) => {
    return instance.post(`/api/v1/favorite/create/${userId}?idhotel=${idHotel}`)
}

const deleteFavorite = (id, idHotel) => {
    return instance.post(`/api/v1/favorite/delete/${id}?idHotel=${idHotel}`)
}

export { getAllFavorite, addFavoriteHotel, deleteFavorite }