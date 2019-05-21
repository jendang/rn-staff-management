import React from 'react'
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/Login/LoginForm'
import EmployeeList from './components/Employees/EmployeeList'
import EmployeeCreate from './components/Employees/EmployeeCreate';
import EmployeeEdit from './components/Employees/EmployeeEdit'
import { Actions } from 'react-native-router-flux'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please login" 
                        initial 
                    />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                    />
                    <Scene 
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title="Create Employee"  
                    />
                    <Scene 
                        key="employeeEdit" 
                        component={EmployeeEdit} 
                        title="Edit Employee"  
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent