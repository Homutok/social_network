import { connect } from 'react-redux';
import {
    getBlogDataList
} from '../../../.store/api/posts-api'

import {
    getProfileInfo,
    like,
    unlike
} from '../../../.store/api/profile-api'

import Blog from './BlogPostList';

function mapStateToProps(state) {
    return {
        posts: state.blog.postList,
        newPost: state.blog.newPost,
        userdata: state.profile.profileInfo,
        token: state.profile.isAuthData.access,
        authData: state.profile.isAuthData.isAuth,
        isLoadedCheck: state.blog.isLoadedList,
        isLoadedProfileCheck: state.profile.isLoaded
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPostsData: (token) => {
            dispatch(getBlogDataList(token));
        },
        loadProfileData: (token) => {
            dispatch(getProfileInfo(token))
        },
        LikePost: (index, token) => {
            dispatch(like(index, token));
        },
        unLikePost: (index, token) => {
            dispatch(unlike(index, token));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);