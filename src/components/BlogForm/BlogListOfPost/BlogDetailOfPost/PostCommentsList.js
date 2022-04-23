import { List, Avatar } from 'antd';
import { useEffect, useState } from 'react';

const CommentList = (props) => {
    const [commentList, setCommentList] = useState([]);
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        setCommentList(props.comments);
        setLoad(true)
    }, [props.comments])

    return <List
        itemLayout="horizontal"
        header={<div>Comments</div>}
        dataSource={commentList}
        loading = {!isLoad}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.comment_author}
                />
                {item.comment_text}
            </List.Item>)}
    />
}
export default CommentList