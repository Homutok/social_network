import { connect } from 'react-redux';
import {
    changeNewPost
} from '../../../.store/actionCreators/BlogForm/BlogActionCreators'
import {
    updateBlogDataDetail,
    createBlogDataDetail
} from '../../../.store/api/posts-api'
import NewPost from './ActionPostForm';

function mapStateToProps(state) {
    return {
        posts: state.blog.postList,
        newPost: state.blog.bufferNewPostData,
        stateIsCreatedPost: state.blog.isCreatedNewPost,
        token: state.profile.isAuthData.access,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        change_post: () => {
            dispatch(changeNewPost());
        },
        create_post: (data, token) => {
            dispatch(changeNewPost());
            dispatch(createBlogDataDetail(data, token));
        },
        update_post: (data, index, token) => {
            dispatch(changeNewPost());
            dispatch(updateBlogDataDetail(data, index, token));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);