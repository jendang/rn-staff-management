import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/store'
import db from './src/db'
import Router from './src/Router'

export default class App extends Component {
  componentWillMount(){
    db()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    )
  }
}

