import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default
class EndScreen extends Component {
  render() {
    return(
      <View style={styles.conatiner}>
        <Text style={styles.message}>Congrats!</Text>
        <Text style={styles.message}>Your score is {this.props.score}</Text>
        <Button color={'#8565BD'} onPress={this.props.jumpToStart} title='Great!'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#8565BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 65,
    color: '#FFFFFF',
    fontFamily: 'Raleway-SemiBold',
  },
});
