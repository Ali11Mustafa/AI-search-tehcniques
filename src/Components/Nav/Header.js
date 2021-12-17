import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom";
import firebase from "firebase"
import { Menu,Switch} from 'antd';
import { MailOutlined, HomeOutlined, SettingOutlined, UserOutlined, UserAddOutlined, CloseOutlined, CheckOutlined,ShareAltOutlined,FileUnknownOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import i18n from '../../118n'
import { useTranslation } from 'react-i18next'
import "./header.css";
const { SubMenu, Item,MenuItem, Dropdown, Button, Space } = Menu;


function Header() {
	let dispatch=useDispatch();
	let history=useHistory();
	const {t}=useTranslation();
const [ state, setState ] = useState('home');
	const handleClick = (e) => {
		console.log(e.key);
	};

	const handleLanguageChange = lang => {
		i18n.changeLanguage(lang)
	  }
	 

	return (
		<div >
		
		
		<Menu mode="horizontal" onClick={handleClick}>
	
		<Item key="home" icon={<ShareAltOutlined />} >
		<Link to="/">{t('navbar.home')}
		</Link>
	</Item>
			
		
			
			
			
			<Item key="Login" icon={<FileUnknownOutlined />} >
				<Link to="/documentation">{t('navbar.documentation')}</Link>
			</Item>
			<Item>	{ <div className="margin-to:5px">
			<Switch  onClick={()=>handleLanguageChange(t("language"))} checkedChildren={t("langText")} unCheckedChildren={t("langText")} />
	  </div> }
			</Item>
		
	
		
		</Menu>
		
		  
		  
		</div>
	);
}
export default Header;
