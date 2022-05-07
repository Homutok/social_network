import { Card, Row, Col, Space } from 'antd';
import React, { useEffect, useState } from 'react';
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
        if (!props.authData)
            navigate("/login")
        else {
            props.loadProfileData(props.token)
            props.loadData(id, props.token)
            setPost(props.post)
            setLoad(props.isLoadedCheck)
        }
    }, [props.isLoadedCheck, props.newText])

    return isLoaded ?
        <Space direction='vertical' wrap style={{ width: '100%' }}>
            <Row type="flex" justify="end" style={{ margin: '1%' }}>
                <DeletePostButton
                    token={props.token}
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
                            postLike={post.liked}
                            postId={post.id}
                            userLikedPosts={props.userdata.likes}
                            like={props.LikePost}
                            unlike={props.unLikePost}
                            token={props.token}
                        />
                        <Col offset={10} >
                            <EditPostButton
                                id={post.id}
                            />
                        </Col>
                    </Row>
                    <CommentList comments={post.comment} />
                    <hr />
                    <CommentAdd
                        token={props.token}
                        update={props.updateComment}
                        complete={props.completeComment}
                        newCommentTxt={props.newText}
                        postId={post.id}
                        userName={props.userdata.username}
                    />
                </Card>
            </Row>
        </Space>
        : <Loading />
}
export default PostDetail