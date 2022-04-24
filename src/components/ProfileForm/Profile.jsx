import { useEffect, useState } from 'react';
import { Card, Input, Space, Button, Avatar, Row } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        !props.authData ? navigate("/login") : setProfile(props.profileInfo[props.curUser])
    }, [props.authData])

    return <Space direction='vertical' wrap style={{ width: '100%' }}>
        <Row type="flex" justify="center" align="middle" >
            <Card
                hoverable title="Profile info"

                bodyStyle={{ padding: '50px' }}
                align="middle"
                style={{
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                <Avatar
                    style={{
                        width: '20%',
                        height: '20%'
                    }}
                    src="https://joeschmoe.io/api/v1/random" />
                <Input.Group compact>
                    <Input value={profile.name} prefix="FullName" />
                    <Input value={profile.group} prefix="Group" />
                    <Input value={profile.university} prefix="University" />
                </Input.Group>
                <br />
                <Button
                    style={{
                        width: 'calc(80%)'
                    }}
                    type="primary"
                >
                    <SaveOutlined />
                </Button>
            </Card>
        </Row>
    </Space>

}
export default Profile
