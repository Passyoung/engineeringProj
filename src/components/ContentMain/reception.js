import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const RBill = LoadableComponent(()=>import('../../routes/Bill/BillTable'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

const RForm = LoadableComponent(()=>import('../../routes/General/general'))

@withRouter
class RContentMain extends React.Component {
    render () {
        return (
            <div style={{padding: 16, position: 'relative'}}>
                <Switch>
                    <PrivateRoute exact path='/reception' component={RBill}/>
                    <PrivateRoute exact path='/reception/forms' component={RForm}/>
                    <Redirect exact from='/' to='/reception'/>
                </Switch>
            </div>
        )
    }
}

export default RContentMain