import {
    GET_BLOG_LIST,
    GET_BLOG_DETAIL,
    POST_NEW_POST_SUCCESS,
    POST_COMMENT_SUCCESS,
    DELETE_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    GET_ERROR,
    TOGGLE_LIKE_POST_SUCCESS
} from "../../actions/BlogForm/BlogActions"


let initalState = {
    postList: [],
    postDetail: {},
    bufferNewPostData: {},
    newCommentText: 'Enter comment',
    isLoadedList: false,
    isLoadedDetail: false,
    // Не знал как решить проблему, когда при переходе из списка к детальному и обратно, очищался isLoaded, потому решил сделать их взаимоисключащими
    isCreatedNewPost: false

}

const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_BLOG_LIST:
            let LoadDataList = action.payload.map((post => post))
            return {
                ...state,
                postList: LoadDataList,
                bufferNewPostData: {},
                isLoadedList: true,
                isLoadedDetail: false
            }
        case GET_BLOG_DETAIL:
            return {
                ...state,
                postDetail: action.payload,
                bufferNewPostData: action.payload,
                isLoadedList: false,
                isLoadedDetail: true
            }
        case GET_ERROR:
            alert(action.payload)
            return { ...state }
        case POST_NEW_POST_SUCCESS:
            return { 
                ...state, 
                isLoadedList: false,
                bufferNewPostData: {}
             }
        case POST_COMMENT_SUCCESS:
            return { 
                ...state, 
                isLoadedDetail: false,
                newCommentText:'' 
            }
        case UPDATE_POST_SUCCESS:
            return { 
                ...state, 
                isLoadedList: false,
                isLoadedDetail: false,
                bufferNewPostData: {}
             }
        case DELETE_POST_SUCCESS:
            return { 
                ...state, 
                isLoadedList: false,
                isLoadedDetail: true
             }
        case TOGGLE_LIKE_POST_SUCCESS:
            return { 
                ...state, 
                isLoadedList: false,
                isLoadedDetail: false
             }
        default:
            return state;
    }
}

export default blogReducer;
