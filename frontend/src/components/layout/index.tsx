import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../header';
import { ContentContainer } from './styles';

const {Content, Footer } = Layout;

interface AppLayoutProps{
    breadcrumb:any,
    children:any,
    component?:any
}


let AppLayout:FC<AppLayoutProps> = ({breadcrumb,children,component}) => {
    return(
        <Layout className="layout">
            <MainHeader />
            <Content className='mycontent_container' >
            {component}
            <Breadcrumb style={{ margin: '16px 0' }}>
                {breadcrumb.map((one:any)=>(
                    <Breadcrumb.Item ><Link to={one.url}>{one.name}</Link></Breadcrumb.Item>
                ))}
            </Breadcrumb>
            
            <ContentContainer>{children}</ContentContainer>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018</Footer>
      </Layout>
    )
}

export default AppLayout