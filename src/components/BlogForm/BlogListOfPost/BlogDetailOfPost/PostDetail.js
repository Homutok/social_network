import { Card, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Post from '../BlogPost'
import LikeButton from '../BlogButtonLike'
import CommentList from './PostCommentsList'
import CommentAdd from './PostCommentAdd';
import EditPostButton from '../../BlogActionPost/EditPostButton';
import DeletePostButton from '../../BlogActionPost/DeletePostButton';

const PostDetail = (props) => {
    const [post, setPost] = useState([]);
    const [isLoad, setLoad] = useState(false);

    const id = useParams().id;

    const navigate = useNavigate();

    useEffect(() => {
        let index = props.posts.findIndex(element => element.id.toString() === id);
        !props.authData ? navigate("/login") : setPost(props.posts[index]);
        setLoad(true)
    }, [props.post])

    return <Col span={14} offset={6} >
        <Col offset={24}>
            <DeletePostButton
                delete={props.postDelete}
                postId={post.id}
            />
        </Col>

        <Card
            hoverable
            title={post.label}
            style={{ width: '600px' }}
            loading={!isLoad}
        >
            <Post postData={post} fulltext={true} />
            <Row>

                <LikeButton
                    toggleLike={props.toggleLike}
                    postLike={post.liked}
                    postId={post.id}
                    userLikedPosts={props.userdata[props.curUser].public.likedPosts}
                    like={props.likePost}
                    unlike={props.unLikePost}
                />
                <Col offset={10} >
                    <EditPostButton
                        id={post.id}
                        editPost = {props.editPosts}
                    />
                </Col>
            </Row>
            <CommentList comments={post.comment} />
            <hr />
            <CommentAdd
                update={props.updateComment}
                complete={props.completeComment}
                newCommentTxt={props.newText}
                postId={post.id}
                userName={props.userdata[props.curUser].name}
            />
        </Card>
    </Col>
}
export default PostDetail