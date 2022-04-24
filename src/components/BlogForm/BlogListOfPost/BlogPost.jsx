import { useEffect, useState } from 'react';

const Post = (props) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        props.fulltext ? setPost(props.postData.text) : setPost(props.postData.text.substring(0, 200) + "...");
    }, [props.postData])

    return <p>{post}</p>
}
export default Post