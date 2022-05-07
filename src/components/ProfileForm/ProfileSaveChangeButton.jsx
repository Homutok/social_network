import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import React from 'react';

const ProfileSaveChangeButton = (props) => {

    return <Button
        style={{
            width: 'calc(40%)'
        }}
        type="primary"
    >
        <SaveOutlined />
    </Button>

}
export default ProfileSaveChangeButton
