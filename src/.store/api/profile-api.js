import axios from 'axios';
import { toggleLikePost } from '../actionCreators/BlogForm/BlogActionCreators';
import {
    getProfileDataSuccess,
    getProfileDataFailure,
    loginUsersSuccess,
    loginUsersError,
    toggleLikeProfile
} from '../actionCreators/ProfileForm/ProfileActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',

});

export const getProfileInfo = (token) => async dispatch => {
    await instance.get('Myprofile/',
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) =>
            dispatch(getProfileDataSuccess(response.data)))
        .catch((error) =>
            dispatch(getProfileDataFailure(error)))
}

export const logIn = (data) => async dispatch => {
    await instance.post('token/', data)
        .then((response) =>
            dispatch(loginUsersSuccess(response.data)))
        .catch((error) =>
            dispatch(loginUsersError(error)))
}

export const like = (data, token) => async dispatch => {
    await instance.post('Likes/', { content_id: data },
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(() =>
            dispatch(toggleLikeProfile()))
        .then(() =>
            dispatch(toggleLikePost()))
        .catch((error) =>
            dispatch(loginUsersError(error)))
}

export const unlike = (data, token) => async dispatch => {
    await instance.delete('Likes/' + data,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(() =>
            dispatch(toggleLikeProfile()))
        .then(() =>
            dispatch(toggleLikePost()))
        .catch((error) =>
            dispatch(loginUsersError(error)))
}

// export const authCheck = (data) => async dispatch => {
//     await instance.post('token/verify/', data.access)
//         .then((response) =>
//             dispatch(loginUsersSuccess(response.data)))
//         .catch(() =>
//             instance.post('token/refresh/', data.refresh)
//                 .then((response) =>
//                     dispatch(loginUsersSuccess(response.data)))
//                 .catch((error) =>
//                     dispatch(loginUsersError(error)))
//         )
// }