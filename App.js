import React, {Component} from 'react';
import {
  Text, 
  View
} from 'react-native';
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import db from './src/db'

export default class App extends Component {
  componentWillMount(){
    db()
  }

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

