import { Col, Button } from 'antd';
import { HeartTwoTone} from '@ant-design/icons';
import { useEffect, useState } from 'react';

const LikeButton = (props) => {
    const [liked, setLike] = useState([]);

    useEffect(() => {
        setLike(props.postLike);
    }, [props.postLike])

    const like = (indexPost) => {
        props.toggleLike(indexPost);
        props.userLikedPosts.includes(props.postId) ? props.like(indexPost) : props.unlike(indexPost);
    }
    const colorLike = ()=>{
        return props.userLikedPosts.includes(props.postId) ? "#F91709" :"#8E8E8E" ;
    }
    return <Col span={8} >
            <Button type="text" onClick={() => {like(props.postId)}}>
                <HeartTwoTone twoToneColor={colorLike()} />
                {liked}
            </Button>
        </Col>


}
export default LikeButton