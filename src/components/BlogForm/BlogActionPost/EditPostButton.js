import { Button } from 'antd';
import { EditOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const EditPostButton = (props) => {
    const navigate = useNavigate();

    const editPostAndRedirect = () => {
        props.editPost(props.id)
        navigate("/blog/action/edit="+props.id)
    }
    return<Button type="primary" shape="round" span={24} offset={16} onClick={editPostAndRedirect}>
                    <EditOutlined />
                    Edit Post
                </Button>
}
export default EditPostButton