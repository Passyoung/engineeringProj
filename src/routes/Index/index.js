import React from 'react'
import {Layout} from 'antd'
import SiderNav from '../../components/SiderNav/admin'
import ContentMain from '../../components/ContentMain/admin'
import HeaderBar from '../../components/HeaderBar'
import {isAuthenticated} from "../../utils/Session";
import MContentMain from "../../components/ContentMain/manager";
import SiderMa from "../../components/SiderNav/manager";
import SiderRec from "../../components/SiderNav/reception";
import RContentMain from "../../components/ContentMain/reception";

const {Sider, Header, Content, Footer} = Layout


class Index extends React.Component {
    state = {
        collapsed: false
    }

    toggle = () => {

        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        // 设置Sider的minHeight可以使左右自适应对齐
        console.log(isAuthenticated() + "nihaodunihaodu")
        if (isAuthenticated() === 'manager') {
            return (
                <div id='page'>
                    <Layout >
                        <Sider collapsible
                               trigger={null}
                               collapsed={this.state.collapsed}
                        >
                            <SiderMa/>
                        </Sider>
                        <Layout>
                            <Header style={{background: '#fff', padding: '0 16px'}}>
                                <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
                            </Header>
                            <Content>
                                <MContentMain/>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>空调管理系统 ©2020 </Footer>
                        </Layout>
                    </Layout>
                </div>
            );
        }
        else if (isAuthenticated() === 'admin') {
            return (
                <div id='page'>
                    <Layout >
                        <Sider collapsible
                               trigger={null}
                               collapsed={this.state.collapsed}
                        >
                            <SiderNav/>
                        </Sider>
                        <Layout>
                            <Header style={{background: '#fff', padding: '0 16px'}}>
                                <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
                            </Header>
                            <Content>
                                <ContentMain/>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>空调管理系统 ©2020 </Footer>
                        </Layout>
                    </Layout>
                </div>
            );
        }
        else if (isAuthenticated() === 'reception') {
            return (
                <div id='page'>
                    <Layout >
                        <Sider collapsible
                               trigger={null}
                               collapsed={this.state.collapsed}
                        >
                            <SiderRec/>
                        </Sider>
                        <Layout>
                            <Header style={{background: '#fff', padding: '0 16px'}}>
                                <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
                            </Header>
                            <Content>
                                <RContentMain/>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>空调管理系统 ©2020 </Footer>
                        </Layout>
                    </Layout>
                </div>
            );
        }
    }
}

export default Index