import React from 'react'
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/Login/LoginForm'
import EmployeeList from './components/Employees/EmployeeList'


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please login" initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() =>  console.log('right')}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                    />
                    {/* <Scene key="employeeList" component={EmployeeList} title="Employees"  /> */}
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent