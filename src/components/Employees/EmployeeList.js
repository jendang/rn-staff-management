import _ from 'lodash'
import React from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux';
import { employeesFetch } from '../../actions/employeeAction'
import ListItem from './ListItem'


class EmployeeList extends React.Component {
    componentWillMount() {
        this.props.employeesFetch()

        this.createDataSource(this.props)
        
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource ({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==r2
        })

        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow = (employee) => {
        return <ListItem employee={employee} />
    }

    render() {
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

            /* <View>
                {this.props.employees.map(employee => <Text key={employee.phone}>{employee.name}</Text>)}
            </View> */
        )
    }
}

const mapStateToProps = state => {
       /*  return {
            employees: Object.values(state.employees)
        } */
        //transform object to array
        const employees = _.map(state.employees, (val, uid) => {
            return {...val, uid} // {shift: 'Monday, name: 'Test', phone: '123', uid: 'dkgjdgjdg'}
        })
        // employees = [{shift: 'Monday, name: 'Test', phone: '123', uid: 'dkgjdgjdg'},{},{}....]
        return {employees}
    
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)