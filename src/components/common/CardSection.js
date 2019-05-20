import React from 'react'
import {
    View,
    StyleSheet

} from 'react-native'

const CardSection = (props) => {
    const { containerStyle } = styles
    return (
        <View style={[containerStyle, props.style]}> 
            {props.children}
        </View>
    )
}

export  {CardSection}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    }
})