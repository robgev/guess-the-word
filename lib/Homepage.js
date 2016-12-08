import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default

class Homepage extends Component {
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.changeScene = this.changeScene.bind(this);
    this.state = {count: 0}
  }

  clickHandler() {
    this.setState({count: this.state.count+1});
  }

  changeScene() {
    this.props.changeScene();
  }

  render() {
    return (
      <View style={this.props.styles.container}>
        <Text style={this.props.styles.header}>
          GuessTheWord
        </Text>
        <View style={this.props.styles.menu}>
          <TouchableOpacity onPress={this.props.changeScene} style={this.props.styles.main}>
            <Text>Box1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.changeScene} style={this.props.styles.main}>
            <Text>Box2</Text>
          </TouchableOpacity>
          <View style={this.props.styles.other}>
            <TouchableOpacity onPress={console.log("Pressed")} style={this.props.styles.other}>
              <Text>Other1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("Pressed")} style={this.props.styles.other}>
              <Text>Other2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("Pressed")} style={this.props.styles.other}>
              <Text>Other3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class Cloner extends Component {
  constructor(){
    super();
  }

  render() {
    const mapArray = new Array(this.props.count).fill(1);
    const items = mapArray.map(function(item, idx){
      return (
        <Button
          key={idx}
          onPress={() => {Alert.alert('Button has been pressed!')}}
          title='New Button'
        />
      );
    });
    return (
      <View style={this.props.style}>
        {items}
      </View>
    );
  }
}
