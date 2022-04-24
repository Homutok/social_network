import { Space, Col, Row, Card } from 'antd';
import { useEffect, useState } from 'react';
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
        if (!props.authData) navigate("/login")
        else { setPosts(props.posts); setLoad(true) }
    }, [props.posts, props.authData, navigate])

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
                    </Row>
                ))
            }
        </Space >
        : <Loading />
}
export default Blog