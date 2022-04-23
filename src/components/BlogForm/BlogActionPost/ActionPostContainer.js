import { connect } from 'react-redux';
import {
    createPost,
    updatePost,
    deletePost,
    editPost,
    completePost,
} from '../../../.store/actionCreators/BlogForm/BlogActionCreators'
import NewPost from './ActionPostForm';

function mapStateToProps(state) {
    return {
        posts: state.blog.postList,
        newPost: state.blog.bufferNewPostData,
        stateIsCreatedPost: state.blog.isCreatedNewPost,
    };
}
function mapDispatchToProps(dispatch){
    return {
        edit_post:(index)=>{
            dispatch(editPost(index));
        },
        create_post:()=>{
            dispatch(createPost());
        },
        update_post:(index)=>{
            dispatch(updatePost(index));
        },
        delete_post:(index) => {
            dispatch(deletePost(index));
        },
        confirm_post:(index, username, label, text) => {
            dispatch(updatePost(label, text));
            dispatch(completePost(index, username));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost);