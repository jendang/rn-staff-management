import React from 'react'
import { 
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native'
import { CardSection } from '../common'
import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {

    onRowPress = () => {
        Actions.employeeEdit({ employee: this.props.employee })
    }

    render() {
        const {name} = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.nameRenderStyle}>
                            {name}
                        </Text>
                    </CardSection>

                </View>
            </TouchableWithoutFeedback>
        )
    }

}

const styles = {
    nameRenderStyle: {
        fontSize: 20, 
        paddingLeft: 25
    }
}

export default ListItem