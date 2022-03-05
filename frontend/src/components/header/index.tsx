import { Layout, Menu, notification } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import {Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useProfileData from '../../Queryhooks/useProfiledata';
import openNotification from '../notification';
const { Header} = Layout;


const headerLinks = [
    {
        url:'/',
        name:'Home'
    },
]




interface MainHeaderProps{
   
}

let MainHeader:FC<MainHeaderProps> = ({}) => {
    let location = useLocation()
    let navigate = useNavigate()
    let refresh_token = localStorage.getItem('refresh_token')
    let access_token = localStorage.getItem('access_token')
    const [loggedIn,setloggedin] = useState(refresh_token && true)
    const handleLoginChange = () =>{
        setloggedin(false)
    }
    let res = useProfileData(handleLoginChange)
    useEffect(()=>{
        res.refetch()
        setloggedin(refresh_token && true)
    },[refresh_token])



    //Logout
    const handleLogout = () => { 
        refresh_token = localStorage.getItem('refresh_token')
        access_token = localStorage.getItem('access_token')
        axios({
            method:'POST',
            url:'/user/logout',
            headers:{
                'Authorization':`Bearer ${access_token}`,
                "refresh": `${refresh_token}`,
            }
        })
        .then(res=>{
            if(res.data.error){
                openNotification('error','Could not logout')
            }
            else{
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                setloggedin(false)
                if(location.pathname.startsWith('/profile'))
                    navigate('/')
                openNotification('success','You logged out successfully')
            }
        })
        .catch(e=>{
            openNotification('error','Could not logout')
        })
    }


    //header links
    const AuthorizationLinks =  loggedIn ? [
        {
            url:'/profile/blogs',
            name:'My blogs'
        },
        {
            url:'#',
            name:'Logout',
            logout:true
        },
    
    ] 
    :[
        {
            url:'/signin',
            name:'Sign In'
        },
        {
            url:'/register',
            name:'Sign Up'
        },
    ]


    return(
        <Header >
            <div className="logo" />
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                 {headerLinks.map(one=>(
                     <Menu.Item><NavLink to={one.url}>{one.name}</NavLink></Menu.Item>
                 ))}
                <SubMenu title='Profile' icon={<img className='profile_image' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />} className='ml-auto'>
                {AuthorizationLinks.map(one=>(
                    <Menu.Item onClick={()=>one.logout ? handleLogout() : ""} > <NavLink className='ml-2' to={one.url}>{one.name}</NavLink></Menu.Item>
                ))}
                </SubMenu>
             
            </Menu>
        </Header>
    )
}

export default MainHeader;