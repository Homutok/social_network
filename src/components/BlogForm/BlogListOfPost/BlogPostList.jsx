import React, { useEffect, useState } from 'react';
import { Space, Row, Card } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import Post from './BlogPost'
import LikeButton from './BlogButtonLike'
import MoreButton from './BlogButtonMore'
import NewPostButton from '../BlogActionPost/NewPostButton';
import Loading from './BlogLoading';

const Blog = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoaded, setLoad] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.authData)
            navigate("/login")
        else {
            props.loadProfileData(props.token)
            props.getPostsData(props.token)
            setPosts(props.posts);
            setLoad(props.isLoadedCheck === props.isLoadedProfileCheck);
        }
    }, [props.isLoadedCheck, props.isLoadedProfileCheck])

    return isLoaded ?
        <Space direction='vertical' wrap style={{ width: '100%' }}>
            <Row type="flex" justify="start" style={{ margin: '1%' }} >
                <NewPostButton
                    createPost={props.createEmptyPost}
                    newPostIndex={props.posts.length}
                />
            </Row>
            {
                posts.map((post) => (
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
                            <Link to={"/blog/" + post.id} style={{ color: 'black' }}>
                                <Post postData={post} fulltext={false} />
                            </Link>
                            <Row>
                                <LikeButton
                                    postLike={post.liked}
                                    postId={post.id}
                                    userLikedPosts={props.userdata.likes}
                                    like={props.LikePost}
                                    unlike={props.unLikePost}
                                    token={props.token}
                                />
                                <MoreButton postID={post.id} />
                            </Row>
                        </Card>
                    </Row>
                ))
            }
        </Space >
        : <Loading />
}
export default Blog