import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
    {
        title: '账单',
        icon: 'home',
        key: '/reception'
    },
    {
        title:'详单',
        icon:'laptop',
        key:'/reception/forms'
    }

]


class SiderRec extends React.Component {
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

export default SiderRec