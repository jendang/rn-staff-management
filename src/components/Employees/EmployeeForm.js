import React from 'react'
import { View, Text, Picker } from 'react-native'
import {
    CardSection,
    Input
} from '../common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../../actions/employeeAction'

class EmployeeForm extends React.Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jenny"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value:text })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="123-456-789"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value:text })}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.pickerTextStyle}>Select shifts</Text>
                </CardSection>
                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employee
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate }) (EmployeeForm)