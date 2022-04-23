import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

const DeletePostButton = (props) => {
    const navigate = useNavigate();

    const deletePost = () =>{
        props.delete(props.postId)
        navigate("/blog")
    }
    return <Button type="primary" shape="round" danger onClick={deletePost}>
            <DeleteOutlined />
            Delete Post
        </Button>

}
export default DeletePostButton