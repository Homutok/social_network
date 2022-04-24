import { connect } from 'react-redux';
import {
    likePost,
    unLikePost,
    createPost,
} from '../../../.store/actionCreators/BlogForm/BlogActionCreators'
import {
    toggleLikePost
} from '../../../.store/actionCreators/ProfileForm/ProfileActionCreators'
import Blog from './BlogPostList';

function mapStateToProps(state) {
    return {
        posts: state.blog.postList,
        newPost: state.blog.newPost,
        curUser: state.profile.isAuthData.currentUser,
        userdata: state.profile.profileList,
        authData: state.profile.isAuthData.isAuth,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        createEmptyPost: () => {
            dispatch(createPost());
        },
        toggleLike: (index) => {
            dispatch(toggleLikePost(index));
        },
        like: (index) => {
            dispatch(likePost(index));
        },
        unLike: (index) => {
            dispatch(unLikePost(index));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);