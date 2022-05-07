import {
    GET_PROFILE_INFO,
    TOGGLE_LIKE_POST_SUCCESS,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_CHECK
} from "../../actions/ProfileForm/ProfileActions"


let initalState = {
    profileInfo: {
    }
    ,
    isAuthData: {
        isAuth: false,
        errors: null
    },
    isLoaded: false,
}

const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_PROFILE_INFO:
            {
                let loadData = action.payload
                return {
                    ...state,
                    profileInfo: {
                        id: loadData.id,
                        fullname: loadData.first_name + " " + loadData.last_name,
                        username: loadData.username,
                        photo: loadData.public_user_info.person_photo,
                        email: loadData.email,
                        summary: loadData.public_user_info.summary,
                        country: loadData.public_user_info.country,
                        gender: loadData.public_user_info.person_gender,
                        date_of_birth: loadData.public_user_info.date_of_birth,
                        group: loadData.public_user_info.group_of_study,
                        university: loadData.public_user_info.university,
                        likes: loadData.likes
                    },
                    isLoaded: true
                }
            }
        case TOGGLE_LIKE_POST_SUCCESS:
            return {
                ...state,
                isLoaded: false
            };
        case LOGIN:
            // localStorage.setItem('refresh', action.payload.refresh)
            // localStorage.setItem('access', action.payload.access)
            return { ...state, isAuthData: { ...action.payload, isAuth: true, errors: null } };
        // case LOGIN_CHECK:
        //     let refresh_token = localStorage.getItem('refresh')
        //     let access_token = localStorage.getItem('access')
        //     return { ...state, isAuthData: { refresh: refresh_token, access: access_token, isAuth: true, errors: null } }
        case LOGIN_ERROR:
            return { ...state, isAuthData: action.payload };
        default:
            return state;
    }
}

export default blogReducer;
