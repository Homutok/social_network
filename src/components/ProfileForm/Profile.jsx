import React, { useEffect, useState } from 'react';
import { Card, Space, Avatar, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import Loading from '../BlogForm/BlogListOfPost/BlogLoading';
import ProfilePublicInfo from './ProfilePublicInfo';
import ProfileSaveChangeButton from './ProfileSaveChangeButton';

const Profile = (props) => {
    const [profile, setProfile] = useState([]);
    const [isLoaded, setLoad] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.authData)
            navigate("/login")
        else {
            props.loadData(props.token)
            setProfile(props.profileInfo)
            setLoad(props.isLoadedCheck)
        }
    }, [props.isLoadedCheck])

    return isLoaded ?
        <Space direction='vertical' wrap style={{ width: '100%' }}>
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
                        src='https://joeschmoe.io/api/v1/random' />

                    <ProfilePublicInfo
                        info={[
                            { name: 'FullName', data: profile.fullname },
                            { name: 'UserName', data: profile.username },
                            { name: 'Date of birth', data: profile.date_of_birth },
                            { name: 'Gender', data: profile.gender },
                            { name: 'Summary', data: profile.summary },
                        ]}
                        logo='Основная информация'
                    />

                    <ProfilePublicInfo
                        info={[
                            { name: 'Country', data: profile.country },
                            { name: 'University', data: profile.university },
                            { name: 'Group', data: profile.group },
                        ]}
                        logo='Место учебы'
                    />

                    <ProfilePublicInfo
                        info={[
                            { name: 'Email', data: profile.email },
                        ]}
                        logo='Личная информация'
                    />

                    <br />
                    <ProfileSaveChangeButton />
                </Card>
            </Row>
        </Space>
        : <Loading />
}
export default Profile
