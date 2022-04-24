import {
    UPDATE_POST,
    DELETE_POST,
    COMPLETE_POST,
    LIKE_POST,
    UPDATE_COMMENT,
    CONFIRM_COMMENT,
    DELETE_COMMENT
} from "../../actions/BlogForm/BlogActions"
import {
    TOGGLE_LIKE_POST,
    LOGIN
} from "../../actions/ProfileForm/ProfileActions"


let initalState = {
    profileList: [
        {
            id: 0,
            role: "admin",
            name: "Kuzmin Alexander",
            group: "IVT-13-18",
            university: "Chuvash State University",
            private: {
                login: "admin",
                password: ""
            },
            public: {
                likedPosts: [1, 3],
                createdPosts: [2, 4]
            }
        },
        {
            id: 1,
            role: "guest",
            name: "Test User",
            group: "test group",
            university: "test",
            private: {
                login: "guest",
                password: "1234"
            },
            public: {
                likedPosts: [2, 5],
                createdPosts: [2, 4]
            }
        }
    ],
    newProfileData: {
        name: "Test User",
        group: "test group",
        university: "test",
    },
    isAuthData: {
        currentUser: 0,
        isAuth: true,
        errors: null
    },
    isLoaded: true,
}

const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_POST:
            return state;
        case DELETE_POST:
            return state;
        case COMPLETE_POST:
            return state;
        case TOGGLE_LIKE_POST:
            {
                let userID = state.isAuthData.currentUser;
                let likedPostState = state.profileList[userID].public.likedPosts
                let index = likedPostState.findIndex(element => element === action.postId);
                if (!likedPostState.includes(action.postId))
                    likedPostState.push(action.postId);
                else
                    likedPostState.splice(index, 1);
                return { ...state, profileList: { ...state.profileList, [userID]: { ...state.profileList[userID], public: { ...state.profileList[userID].public, likedPosts: likedPostState } } } };
            }
        case UPDATE_COMMENT:
            return state;
        case CONFIRM_COMMENT:
            return state;
        case DELETE_COMMENT:
            return state;
        case LOGIN:
            {
                let newAuthData = {
                    currentUser: null,
                    isAuth: false,
                    errors: null
                }
                state.profileList.map((users) => {
                    if (action.payload.username === users.private.login && action.payload.password === users.private.password) {
                        newAuthData = { currentUser: users.id, isAuth: true, errors: null }
                    }
                })
                if (!newAuthData.isAuth)
                    newAuthData.errors = "Incorrect login or password !!"
                console.log({ ...state, isAuthData: newAuthData })
                return { ...state, isAuthData: newAuthData };
            }
        default:
            return state;
    }
}

export default blogReducer;
