import React from 'react'
import { View, Text } from 'react-native'
import {
    Card,
    CardSection,
    Button,
    Input,
    Spinner,
} from '../common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../../actions'

class LoginForm extends React.Component {

    onEmailChange = text => {
        this.props.emailChanged(text)
    }

    onPasswordChange = text => {
        this.props.passwordChanged(text)
    }

    onButtonPress = () => {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderError = () => {
        if(this.props.error){
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton = () => {
        if(this.props.loading){
            return <Spinner size="large" /> 
        }
        return (
            <Button 
                text={`Login`}
                onPress={this.onButtonPress}
            />
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@mail.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="at least 6 characters"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)