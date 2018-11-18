/**
 * App.js
 * ReactNativePOC
 * Created by Manoj Solanki
 *
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './pages/LoginPage';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage> </LoginPage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
