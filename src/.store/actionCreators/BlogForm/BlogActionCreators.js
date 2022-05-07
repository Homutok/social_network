import {
    GET_BLOG_LIST,
    GET_BLOG_DETAIL,
    POST_NEW_POST_SUCCESS,
    POST_COMMENT_SUCCESS,
    DELETE_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    CHANGE_NEW_POST_STATE,
    CHANGE_NEW_COMMENT_STATE,
    GET_ERROR,
    TOGGLE_LIKE_POST_SUCCESS
} from "../../actions/BlogForm/BlogActions"


export const getDataListSuccess = (posts) => ({
    type: GET_BLOG_LIST,
    payload: posts
})

export const getDataDetailSuccess = (post) => ({
    type: GET_BLOG_DETAIL,
    payload: post
})

export const completeCommentSuccess = () => ({
    type: POST_COMMENT_SUCCESS,
})

export const completePostSuccess = () => ({
    type: POST_NEW_POST_SUCCESS,
})

export const updatePostSuccess = () => ({
    type: UPDATE_POST_SUCCESS,
})

export const changeNewPost = (data) => ({
    type: CHANGE_NEW_POST_STATE,
    payload: data
})

export const changeNewComment = (data) => ({
    type: CHANGE_NEW_COMMENT_STATE,
    payload: data
})

export const deletePostSuccess = () => ({
    type: DELETE_POST_SUCCESS,
})

export const getDataFailure = (error) => ({
    type: GET_ERROR,
    payload: error
})
export const toggleLikePost = () => ({
    type: TOGGLE_LIKE_POST_SUCCESS
})
