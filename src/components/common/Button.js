import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet

} from 'react-native'

const Button = (props) => {
    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={buttonStyle}
        > 
            <Text style={textStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export  {Button}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})