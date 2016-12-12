//WARNING: This code is very long and inefficient: I will review it later

import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default
class MainMenu extends Component {
  constructor(){
    super();
    this.rowPressed = this.rowPressed.bind(this);
    this.state = {active: [false,true,false,false,false,false,false]}
  }

  rowPressed(id){
    let newState = [false,false,false,false,false,false,false];
    newState[id] = true;
    this.setState({active: newState});
    if(id==='0'){
      this.props.prevScene();
    }
  }

  render() {
    return (
      <View style={this.props.styles.container}>
        <View style={this.props.styles.left}>

          <View style={this.props.styles.coins}>
            <Image
              source={require('./../assets/icons/Expensive.png')}
              style={{height: 24, width: 24, marginRight: 13}}
            />
            <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold'}}>20</Text>
          </View>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('0')}} >
            <View style={this.state.active[0]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/Home.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>Home</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('1')}} >
            <View style={this.state.active[1]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/FilingCabinet.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>All</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('2')}} >
            <View style={this.state.active[2]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/Star.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>Favorites</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('3')}} >
            <View style={this.state.active[3]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/Megaphone.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>New</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('4')}} >
            <View style={this.state.active[4]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/PlusMathFilled.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>Custom</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('5')}} >
            <View style={this.state.active[5]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/Settings.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>Settings</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>{this.rowPressed('6')}} >
            <View style={this.state.active[6]?this.props.styles.active:this.props.styles.block}>
              <Image
                source={require('./../assets/icons/Shop.png')}
                style={{height: 28, width: 28, marginRight: 13}}
              />
              <Text style={{color: '#314051', fontFamily: 'Raleway-SemiBold', fontSize: 17}}>Store</Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
        <View style={this.props.styles.right}>
          <Text>Box2</Text>
        </View>
      </View>
    );
  }
}
