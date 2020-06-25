import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const MHome = LoadableComponent(()=>import('../../routes/Forms/forms'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

//基本组件Demo
const FormSearch = LoadableComponent(()=>import('../../routes/General/general'))

@withRouter
class MContentMain extends React.Component {
    render () {
        return (
            <div style={{padding: 16, position: 'relative'}}>
                <Switch>
                    <PrivateRoute exact path='/manager' component={MHome}/>

                    <PrivateRoute exact path='/manager/general' component={FormSearch}/>

                    <Redirect exact from='/' to='/home'/>
                </Switch>
            </div>
        )
    }
}



export default MContentMain