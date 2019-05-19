import React from 'react'
import {
    View,
    StyleSheet

} from 'react-native'

const Card = (props) => {
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

export  {Card}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        //shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },//size of shadow
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        //
        marginLeft: 5, // between card & screen
        marginRight: 5,
        marginTop: 10, //between cards

    }

})