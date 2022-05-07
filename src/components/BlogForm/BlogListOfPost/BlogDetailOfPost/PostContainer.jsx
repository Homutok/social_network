import { connect } from 'react-redux';
import {
    changeNewComment,
} from '../../../../.store/actionCreators/BlogForm/BlogActionCreators'

import {
    getBlogDataDetail,
    deleteBlogDataDetail,
    postNewComment
} from '../../../../.store/api/posts-api'

import {
    getProfileInfo,
    like,
    unlike
} from '../../../../.store/api/profile-api'

import PostDetail from './PostDetail';

function mapStateToProps(state) {
    return {
        post: state.blog.postDetail,
        userdata: state.profile.profileInfo,
        newText: state.blog.newCommentText,
        authData: state.profile.isAuthData.isAuth,
        isLoadedCheck: state.blog.isLoadedDetail,
        token: state.profile.isAuthData.access,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loadData: (id, token) => {
            dispatch(getBlogDataDetail(id, token))
        },
        loadProfileData: (token) => {
            dispatch(getProfileInfo(token))
        },
        updateComment: (text) => {
            dispatch(changeNewComment(text));
        },
        completeComment: (newMsgElement, id, token) => {
            dispatch(changeNewComment(newMsgElement));
            dispatch(postNewComment({ comment_text: newMsgElement, comment_post: id, }, token))
        },
        postDelete: (id, token) => {
            dispatch(deleteBlogDataDetail(id, token));
        },
        LikePost: (index, token) => {
            dispatch(like(index, token));
        },
        unLikePost: (index, token) => {
            dispatch(unlike(index, token));
        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);