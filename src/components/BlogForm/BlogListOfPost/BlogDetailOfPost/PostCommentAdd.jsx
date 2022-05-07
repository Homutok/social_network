import { Button, Input } from 'antd';
import React, { useRef } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';

const CommentAdd = (props) => {

    let newCommentElement = useRef(null);
    const competeComment = () => {
        let text = newCommentElement.current.input.value;
        props.complete(text, props.postId, props.token);
        newCommentElement.current.input.value = props.newCommentTxt
    }

    return <Input.Group compact>
        <Input
            style={{ width: 'calc(100% - 60px)' }}
            ref={newCommentElement}
            onKeyUp={(e) => {
                if (e.code === "Enter")
                    competeComment()
            }} />
            
        <Button type="primary"
            style={{ marginLeft: 8 }}
            onClick={competeComment}>
            <PlayCircleOutlined />
        </Button>
    </Input.Group>

}
export default CommentAdd