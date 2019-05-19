import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/store'
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
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header headerText={`Login`} />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

