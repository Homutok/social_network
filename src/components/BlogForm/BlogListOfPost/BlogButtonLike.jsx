import { Col, Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const LikeButton = (props) => {
    const [liked, setLike] = useState([]);

    useEffect(() => {
        setLike(props.postLike);
    }, [props.postLike])

    const actionLike = (indexPost) => {
        likeOrDisLike() ? props.unlike(getIndexOfLike()[0].id, props.token) : props.like(indexPost, props.token);
    }
    const likeOrDisLike = () => {
        return getIndexOfLike().length > 0
    }

    const getIndexOfLike = () => {
        return props.userLikedPosts.filter(like => like.content_id === props.postId)
    }

    const colorLike = () => {
        return likeOrDisLike() ? "#F91709" : "#8E8E8E";
    }
    return <Col span={8} >
        <Button type="text" onClick={() => { actionLike(props.postId) }}>
            <HeartTwoTone twoToneColor={colorLike()} />
            {liked}
        </Button>
    </Col>


}
export default LikeButton