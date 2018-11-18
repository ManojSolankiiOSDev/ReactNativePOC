import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View>
            <Text>Email</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        </View>
        <View></View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor: '#2f3133',
      alignItems:'center'
    }
  });

export default LoginPage;