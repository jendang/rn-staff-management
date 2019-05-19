import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput

} from 'react-native'

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, textLabel, textInput } = styles
    return (
        <View style={containerStyle}>
            <Text style={textLabel}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry} // true is default
                placeholder={placeholder}
                autoCorrect={false}  // not auto correct when typing
                style={textInput}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    textLabel:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    textInput: {
        height: 20,
        width: 100,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },

})