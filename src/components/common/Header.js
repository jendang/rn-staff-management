import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const Header = ({headerText}) => {
    const { headerTextStyle, container } = styles
    return (
        <View style={container}>
            <Text style={headerTextStyle}>{headerText}</Text>
        </View>
    )
}

export  {Header}

const styles = StyleSheet.create({
    container: { //flexbox
        // flex: 1, // fullscreen,
        // flexDirection: 'row', //default: columns
        justifyContent: 'center', //vertically
        alignItems: 'center', //horizontally
        height: 70,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        //shadow for box
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyle: {
        fontSize: 20,
    
    }

})