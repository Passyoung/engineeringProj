import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
    {
        title: '概览',
        icon: 'home',
        key: '/manager'
    },
    {
        title: '详单查询',
        icon: 'laptop',
        key: '/manager/specification',

    },


]


class SiderMa extends React.Component {
    render() {

        return (
            <div style={{height: '100vh',overflowY:'scroll'}}>
                <div style={styles.logo}></div>
                <CustomMenu menus={menus}/>
            </div>
        )
    }
}

const styles = {
    logo: {
        height: '32px',
        background: 'rgba(255, 255, 255, .2)',
        margin: '16px'
    }
}

export default SiderMa