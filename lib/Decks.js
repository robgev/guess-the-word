import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default
class Decks extends Component {
  constructor(){
    super();
    this.state = {width: 100, height: 150}
  }

  currentDimensions(){
    const currentDimensions = {};
    const {width} = Dimensions.get('window');
    currentDimensions.width = (this.state.width<=100) ? width*0.85 : 100;
    currentDimensions.height =  (this.state.height<=150) ? width*1.275 : 150;
    return currentDimensions
  }

  currentHeight(){
    const {width} = Dimensions.get('window');

  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({width: this.currentDimensions().width, height: this.currentDimensions().height})}>
          <Animatable.Image
            transition={["width", "height"]}
            direction={"alternate"}
            source={require('./../assets/pooh.jpg')}
            style={{width: this.state.width, height: this.state.height, margin: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
