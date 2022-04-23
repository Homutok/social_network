import { useEffect, useState } from 'react';
import { Card, Input, Col, Button, Avatar } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        !props.authData ? navigate("/login") : setProfile(props.profileInfo[props.curUser])
    },[props.authData ])

    return <Col span={14} offset={6} >
        <Card
            hoverable title="Profile info"
            style={{ width: '600px' }}
            align="middle"
        >
            <Avatar size={150} src="https://joeschmoe.io/api/v1/random" />
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
    </Col>

}
export default Profile
