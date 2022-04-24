import {
    UPDATE_PROFILE_INFO,
    COMPLETE_POST,
    TOGGLE_LIKE_POST,
    LOGIN
} from "../../actions/ProfileForm/ProfileActions"

export const updateProfile = (text) => ({
    type: UPDATE_PROFILE_INFO,
    msgText: text
})


export const completePost = (index) => ({
    type: COMPLETE_POST,
    msgIndex: index
})

export const toggleLikePost = (index) => ({
    type: TOGGLE_LIKE_POST,
    postId: index
})

export const loginUsers = (login, userPassword) => ({
    type: LOGIN,
    payload: {
        username: login,
        password: userPassword
    }

})

