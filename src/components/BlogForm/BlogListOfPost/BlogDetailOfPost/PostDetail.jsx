import { Card, Row, Col, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Post from '../BlogPost'
import LikeButton from '../BlogButtonLike'
import CommentList from './PostCommentsList'
import CommentAdd from './PostCommentAdd';
import EditPostButton from '../../BlogActionPost/EditPostButton';
import DeletePostButton from '../../BlogActionPost/DeletePostButton';
import Loading from '../BlogLoading';

const PostDetail = (props) => {
    const [post, setPost] = useState([]);
    const [isLoaded, setLoad] = useState(false);

    const id = useParams().id;

    const navigate = useNavigate();

    useEffect(() => {
        let index = props.posts.findIndex(element => element.id.toString() === id);
        if (!props.authData)
            navigate("/login")
        else {
            setPost(props.posts[index]);
            setLoad(true)
        }
        debugger
    }, [props.post])

    return isLoaded ?
        <Space direction='vertical' wrap style={{ width: '100%' }}>
            <Row type="flex" justify="end" style={{ margin: '1%' }}>
                <DeletePostButton
                    delete={props.postDelete}
                    postId={post.id}
                />
            </Row>
            <Row type="flex" justify="center" align="middle" key={post.id}>
                <Card
                    hoverable
                    title={post.label}
                    align="middle"
                    style={{
                        width: '50%',
                    }}
                    loading={!isLoaded}
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
                                editPost={props.editPosts}
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
            </Row>
        </Space>
        : <Loading />
}
export default PostDetail