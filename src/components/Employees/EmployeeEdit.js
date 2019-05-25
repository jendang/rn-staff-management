import _ from 'lodash'
import React from 'react'
import Communications from 'react-native-communications'
import { 
    Card,
    CardSection,
    Button,
    Confirm
} from '../common'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import { 
    employeeUpdate, 
    employeeSave,
    employeeDelete,
    employeeFetch
} from '../../actions/employeeAction'


class EmployeeEdit extends React.Component {
    state={
        showModal: false,
       /*  name: '',
        phone: '',
        shift: '' */
        
    }

    componentWillMount() {
        /* const { name, phone, shift } = this.props
        this.props.employeeUpdate(
            { prop: 'name', value: name },
            { prop: 'phone', value: phone },
            { prop: 'shift', value: shift },  
        ) */
        /* _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })  */

        this.props.employeeFetch({uid: this.props.employee.uid })
        //console.log(this.props.employee)

    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props
        //console.log(name, phone, shift)
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
        console.log(this.props.employee.uid)
    }

    onTextPress = () => {
        const { phone, shift } = this.props
        Communications.text(phone, `Your up coming shift is on ${shift}`)

    }

    //delete employee
    onAccept = () => {
        this.props.employeeDelete({ uid: this.props.employee.uid })
    }

    //just close the Modal
    onDecline = () => {
        this.setState({ showModal: false })
    }

    render() {
        console.log(this.props)
        return(
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button 
                        text="Save changes"
                        onPress={this.onButtonPress}
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        onPress={this.onTextPress} 
                        text="Text Schedule"
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        onPress={() => this.setState({ showModal: !this.state.showModal })} 
                        text="Delete"
                    />
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept}
                    onDecline={this.onDecline}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>

        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employee
    return { name, phone, shift }
}

export default connect(
    mapStateToProps, { 
        employeeUpdate, 
        employeeSave, 
        employeeDelete,
        employeeFetch
    }) (EmployeeEdit)