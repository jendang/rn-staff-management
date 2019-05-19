import React, {Component} from 'react';
import {
  Text, 
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Text>Welcome to React Native!</Text>
        </View>
      </Provider>
    )
  }
}

