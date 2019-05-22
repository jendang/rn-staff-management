import _ from 'lodash'
import React from 'react'
import { 
    Card,
    CardSection,
    Button
} from '../common'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave } from '../../actions/employeeAction'


class EmployeeEdit extends React.Component {
    componentWillMount() {
        /* const { name, phone, shift } = this.props
        this.props.employeeUpdate(
            { prop: 'name', value: name },
            { prop: 'phone', value: phone },
            { prop: 'shift', value: shift },  
        ) */
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        }) 

        //this.props.employeeFetch({uid: this.props.employee.uid})
    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props
        //console.log(name, phone, shift)
        this.props.employeeSave({ name, phone, shift, id: this.props.employee.uid })
    }

    render() {
        //console.log(this.props.employee)
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button 
                        text="Save changes"
                        onPress={this.onButtonPress}
                    />
                </CardSection>
            </Card>

        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employee
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave }) (EmployeeEdit)