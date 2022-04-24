import { Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const MoreButton = (props) => {
    const [id, setId] = useState([]);

    useEffect(() => {
        setId(props.postID);
    }, [props.postID])

    return <Col span={8} offset={8} >
        <Link to={"/blog/" + id} >Go to discussion <MessageOutlined /></Link>
    </Col>

}
export default MoreButton