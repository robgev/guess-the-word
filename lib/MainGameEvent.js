import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native';
import {SensorManager} from 'NativeModules';
export default
class MainGameEvent extends Component {
  constructor(){
    super();
    this.state = {test: ''};
    this.update = this.update.bind(this);
  }

  update(data) {
    console.log(`${data.x} ${data.y} ${data.z}`)
    if(data.x > 6) {
      this.setState({test: 'true'})
    }
  }

  componentWillMount() {
    this.AccelCheck = DeviceEventEmitter.addListener('Accelerometer', this.update);
    SensorManager.startAccelerometer(100);
  }

  componentWillUnmount() {
    SensorManager.stopAccelerometer();
    this.AccelCheck.remove();
  }

  render() {
    return(
      <View><Text>{this.state.test}</Text></View>
    );
  }
}
