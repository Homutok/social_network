import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPostButton = (props) => {
    const [formName, setFormName] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        props.stateIsCreatedPost ? setFormName("Continue edit new post") : setFormName("Create new post")
    }, [props.stateIsCreatedPost])

    const createPostAndRedirect = () => {
        navigate("/blog/action/new")
    }


    return <Button type="primary" shape="round" span={24} offset={16} onClick={createPostAndRedirect} >
        <PlusOutlined />
        {formName}
    </Button>
}
export default NewPostButton