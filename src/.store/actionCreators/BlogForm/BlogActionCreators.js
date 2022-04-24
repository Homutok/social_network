import {
    CREATE_POST,
    EDIT_POST,
    UPDATE_POST,
    DELETE_POST,
    COMPLETE_POST,
    LIKE_POST,
    UNLIKE_POST,
    UPDATE_COMMENT,
    CONFIRM_COMMENT,
    DELETE_COMMENT
} from "../../actions/BlogForm/BlogActions"

export const createPost = () => ({
    type: CREATE_POST,
})

export const editPost = (index) => ({
    type: EDIT_POST,
    postIndex: index
})

export const updatePost = (label, text) => ({
    type: UPDATE_POST,
    postLabel: label,
    postText: text
})

export const completePost = (index, username) => ({
    type: COMPLETE_POST,
    postIndex: index,
    postAuthor: username
})

export const deletePost = (index) => ({
    type: DELETE_POST,
    postIndex: index
})

export const likePost = (index) => ({
    type: LIKE_POST,
    postIndex: index
})

export const unLikePost = (index) => ({
    type: UNLIKE_POST,
    postIndex: index
})

export const updateComment = (text) => ({
    type: UPDATE_COMMENT,
    commentText: text
})

export const deleteComment = (index) => ({
    type: DELETE_COMMENT,
    msgIndex: index
})

export const completeComment = (index, username) => ({
    type: CONFIRM_COMMENT,
    postIndex: index,
    userData: username
})
