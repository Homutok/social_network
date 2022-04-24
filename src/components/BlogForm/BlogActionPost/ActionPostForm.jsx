import { useEffect, useState, useRef } from 'react';
import { Card, Input, Space, Button, Row } from 'antd';
import { EditOutlined, FontSizeOutlined, LoadingOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPost = (props) => {
    const [post, setPost] = useState([]);

    const [isLoad, setLoad] = useState(false);
    const [actionName, setActionName] = useState([]);

    const { TextArea } = Input;
    const actionType = useParams().type;
    const id = useParams().id;
    const navigate = useNavigate();

    let newLabelElement = useRef(null);
    let newTextElement = useRef(null);

    useEffect(() => {

        switch (actionType) {
            case "edit":
                {
                    setActionName("Edit Post")
                    break
                }
            case "new":
                {
                    setActionName("Create new Post")
                    break
                }
            default:
                {
                    navigate("/blog")
                    break
                }
        }
        setPost(props.newPost);
        setLoad(true)
    }, [props.postData])

    const saveChangePostData = () => {
        let index = props.posts.findIndex(element => element.id.toString() === id)
        props.confirm_post(index,
            "username",
            newLabelElement.current.input.value,
            newTextElement.current.resizableTextArea.props.value)
        navigate("/blog")
    }


    return <Space direction='vertical' wrap style={{ width: '100%' }}>
        {!isLoad ?
            <LoadingOutlined />
            :
            <Row type="flex" justify="center" align="middle" >
                <Card
                    hoverable title={actionName}
                    align="middle"
                    style={{
                        width: '50%',
                    }}
                >
                    <Input.Group compact>
                        <Input
                            size="large"
                            showCount placeholder="Enter label"
                            maxLength={100}
                            defaultValue={post.label}
                            prefix={<FontSizeOutlined />}
                            ref={newLabelElement}
                        />
                        <br />
                        <TextArea
                            style={{ width: 'calc(100% )', height: 300 }}
                            showCount maxLength={1000}
                            defaultValue={post.text}
                            ref={newTextElement}
                        />
                        <br />
                        <Button
                            type="primary"
                            style={{
                                width: 'calc(100%)'
                            }}
                            onClick={saveChangePostData}
                        >
                            <EditOutlined />
                        </Button>
                    </Input.Group>
                </Card>
            </Row>
        }

    </Space>

}
export default EditPost