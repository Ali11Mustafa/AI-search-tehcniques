import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, HomeOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

function Header() {
	const [ state, setState ] = useState('home');
	const handleClick = (e) => {
		console.log(e.key);
	};

	return (
		<Menu mode="horizontal" onClick={handleClick}>
			<Item key="home" icon={<HomeOutlined />}>
				<Link to="/">home</Link>
			</Item>
			<Item key="Register" icon={<UserAddOutlined />}>
				<Link to="/Register">Register</Link>
			</Item>
			<Item key="Login" icon={<UserOutlined />} style={{ float: 'right' }}>
				<Link to="/Login">Login</Link>
			</Item>
			<SubMenu key="SubMenu" icon={<SettingOutlined />} title="username">
				<Menu.ItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
		</Menu>
	);
}
export default Header;
