import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import db from './src/db'
import {
  Header,
  
  
} from './src/components/common'
import LoginForm from './src/components/Login/LoginForm';

export default class App extends Component {
  componentWillMount(){
    db()
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText={`Login`} />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

