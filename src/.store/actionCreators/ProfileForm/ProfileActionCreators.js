import {
    GET_PROFILE_INFO,
    GET_ERROR,
    TOGGLE_LIKE_POST_SUCCESS,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_CHECK
} from "../../actions/ProfileForm/ProfileActions"

export const getProfileDataSuccess = (profileInfo) => ({
    type: GET_PROFILE_INFO,
    payload: profileInfo
})

export const getProfileDataFailure = (error) => ({
    type: GET_ERROR,
    payload: error
})

export const toggleLikeProfile = () => ({
    type: TOGGLE_LIKE_POST_SUCCESS
})

export const loginUsersSuccess = (data) => ({
    type: LOGIN,
    payload: {
        refresh: data.refresh,
        access: data.access
    }
})

export const loginUsersError = (error) => ({
    type: LOGIN_ERROR,
    payload: { error: error }
})

export const loginUsersCheck = () => ({
    type: LOGIN_CHECK
})

