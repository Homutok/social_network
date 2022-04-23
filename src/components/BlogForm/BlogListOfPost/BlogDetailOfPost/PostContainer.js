import { connect } from 'react-redux';
import {
    deletePost,
    likePost,
    unLikePost,
    updateComment,
    completeComment,
    editPost,
} from '../../../../.store/actionCreators/BlogForm/BlogActionCreators'
import {
    toggleLikePost
} from '../../../../.store/actionCreators/ProfileForm/ProfileActionCreators'
import PostDetail from './PostDetail';

function mapStateToProps(state) {
    return {
        posts: state.blog.postList,
        curUser: state.profile.isAuthData.currentUser,
        userdata: state.profile.profileList,
        newText: state.blog.newCommentText,
        authData:state.profile.isAuthData.isAuth,
    };
}
function mapDispatchToProps(dispatch){
    return {
        editPosts:(index)=>{
            dispatch(editPost(index));
        },
        postDelete:(index)=>{
            dispatch(deletePost(index));
        },
        toggleLike:(index)=>{
            dispatch(toggleLikePost(index));
        },
        likePost:(index)=>{
            dispatch(likePost(index));
        },
        unLikePost:(index) => {
            dispatch(unLikePost(index));
        },
        updateComment:(newCommentElement) => {
            dispatch(updateComment(newCommentElement));
        },
        completeComment:(newMsgElement, index, authorname) => {
            dispatch(updateComment(newMsgElement));
            dispatch(completeComment(index,authorname));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);