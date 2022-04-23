import { Space, Col, Row, Card } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './BlogPost'
import LikeButton from './BlogButtonLike'
import MoreButton from './BlogButtonMore'
import NewPostButton from '../BlogActionPost/NewPostButton';
const Blog = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        !props.authData ? navigate("/login") : setPosts(props.posts);
        setLoad(true)
    }, [props.posts])

    return <Space direction='vertical' wrap>
        {isLoad ? (
            <Col offset={2}>
                <NewPostButton
                    createPost={props.createEmptyPost}
                    newPostIndex={props.posts.length}
                />
            </Col>
        ) : (
            <Card></Card>
        )
        }
        {
            posts.map((post) => {
                return <Col span={24} offset={14} key={post.id}>
                    <Card
                        hoverable
                        title={post.label}
                        align="middle"
                        style={{ width: '600px' }}
                        loading={!isLoad}
                    >
                        <Post postData={post} fulltext={false} />
                        <Row>
                            <LikeButton
                                toggleLike={props.toggleLike}
                                postLike={post.liked}
                                postId={post.id}
                                userLikedPosts={props.userdata[props.curUser].public.likedPosts}
                                like={props.like}
                                unlike={props.unLike}
                            />
                            <MoreButton postID={post.id} />
                        </Row>
                    </Card>
                </Col>
            })
        }
    </Space >
}
export default Blog