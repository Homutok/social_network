import axios from 'axios';
import {
    getDataListSuccess,
    getDataDetailSuccess,
    completePostSuccess,
    updatePostSuccess,
    completeCommentSuccess,
    deletePostSuccess,
    getDataFailure
} from '../actionCreators/BlogForm/BlogActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

export const getBlogDataList = (token) => async dispatch => {
    await instance.get('Blog/',
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })  
        .then((response) =>
            dispatch(getDataListSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const getBlogDataDetail = (id, token) => async dispatch => {
    await instance.get('Blog/' + id,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) =>
            dispatch(getDataDetailSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const createBlogDataDetail = (data, token) => async dispatch => {
    await instance.post('Blog/', data,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(() =>
            dispatch(completePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const updateBlogDataDetail = (data, id, token) => async dispatch => {
    await instance.put('Blog/' + id + '/', data,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(() =>
            dispatch(updatePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const deleteBlogDataDetail = (id, token) => async dispatch => {
    await instance.delete('Blog/' + id,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(() =>
            dispatch(deletePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const postNewComment = (data, token) => async dispatch => {
    await instance.post('Comments/', data,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(() =>
            dispatch(completeCommentSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}