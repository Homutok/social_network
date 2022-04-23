import { Menu } from 'antd';
import { Link } from "react-router-dom";

export default function HeaderLine(props) {
//Можно было бы сделать чуток красивее...
    if (props.authData)
        return <div className="menu" >
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key='logo-profile'><Link to="/profile">MyProfile</Link></Menu.Item>
                <Menu.Item key='logo-blog'><Link to="/blog">NewsList</Link></Menu.Item>
            </Menu>
        </div>
    else
        return <div className="menu" >
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key='logo-login'><Link to="/login">LogIn</Link></Menu.Item>
            </Menu>
        </div>
}