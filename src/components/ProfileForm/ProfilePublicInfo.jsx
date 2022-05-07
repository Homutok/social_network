import React, { useEffect, useState } from 'react';
import { Input, Typography } from 'antd';

const { Title } = Typography;

const ProfilePublicInfo = (props) => {
    const [profileInfo, setProfileInfo] = useState([]);
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        setProfileInfo(props.info)
        setLogo(props.logo)
    }, [props.info])

    return <Input.Group compact>
        <Title level={3} >{logo}</Title>
        <br />
        {
            profileInfo.map((info) => <Input
                key={info.name}
                value={info.data}
                prefix={info.name}
                align="middle"
                style={{
                    width: '70%',
                }}
            />)
        }
        <hr />
    </Input.Group>

}
export default ProfilePublicInfo
