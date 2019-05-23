import React from 'react'
import {
    Text,
    View,
    Modal
} from 'react-native'

import { CardSection } from './CardSection'
import { Button } from './Button'

export const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles
    return (
            <Modal
                visible={visible} //true:show //false:fade
                transparent // modal can see through the background
                animationType="slide"
                onRequestClose={() => {}}
            >
                <View style={containerStyle}>
                    <CardSection style={cardSectionStyle}>
                        <Text style={textStyle}>{children}</Text>
                    </CardSection>

                    <CardSection>
                        <Button 
                            onPress={onAccept}
                            text="Yes" />
                        <Button 
                            onPress={onDecline}
                            text="No" />
                    </CardSection>
                </View>
            </Modal>
    
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: "rgba(0,0,0,0.75)",
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}