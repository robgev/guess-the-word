import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Image
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
          <TouchableHighlight activeOpacity={0.1} onPress={this.props.changeScene} style={this.props.styles.single}>
            <Image
              source={require('./../assets/single.png')}
              style={{height: 150, width: 150}}
            />
        </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.1} onPress={this.props.changeScene} style={this.props.styles.versus}>
            <Image
              source={require('./../assets/versus.png')}
              style={{height: 150, width: 150}}
            />
        </TouchableHighlight>
          <View style={this.props.styles.other}>
            <TouchableHighlight activeOpacity={0.1} onPress={this.props.changeScene} style={this.props.styles.more}>
              <Image
                source={require('./../assets/more.png')}
                style={{height: 50, width: 170}}
              />
          </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.1} onPress={this.props.changeScene} style={this.props.styles.like}>
              <Image
                source={require('./../assets/like.png')}
                style={{height: 50, width: 170}}
              />
          </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.1} onPress={this.props.changeScene} style={this.props.styles.howto}>
              <Image
                source={require('./../assets/howto.png')}
                style={{height: 50, width: 170}}
              />
          </TouchableHighlight>
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
