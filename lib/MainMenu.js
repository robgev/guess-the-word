//WARNING: This code is very long and inefficient: I will review it later

import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default
class MainMenu extends Component {
  constructor(){
    super();
    this.rowPressed = this.rowPressed.bind(this);
    this.state = {active: [false,true,false,false,false,false,false], currentOption: '1'}
  }

  rowPressed(id){
    let newState = [false,false,false,false,false,false,false];
    newState[id] = true;
    if(id==='0'){
      this.props.prevScene();
    }
    this.setState({active: newState, currentOption: id});
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
          <Themes currentOption={this.state.currentOption}></Themes>
        </View>
      </View>
    );
  }
}

class Themes extends Component {
  constructor() {
    super();
  }

  render() {
    let content = (<View></View>);
    switch (this.props.currentOption) {
      case '1':
        content = (
          <View style={ThemesStyle.container}>
            <View style={ThemesStyle.row}>
              <View style={ThemesStyle.box1}>
                <Image
                  source={require('./../assets/icons/Like.png')}
                  style={{height: 28, width: 28, marginRight: 13, alignSelf: 'flex-end'}}
                />
                <Icon name="users" size={80} color="#FFFFFF" style={{marginBottom:15}} />
                <Text style={{color: '#FFF', fontFamily: 'Raleway-SemiBold', fontSize: 20}}>Famous People</Text>
              </View>
              <View style={ThemesStyle.box2}>
                <Image
                  source={require('./../assets/icons/Like.png')}
                  style={{height: 28, width: 28, marginRight: 13, alignSelf: 'flex-end'}}
                />
              <Icon name="bolt" size={80} color="#FFFFFF" style={{marginBottom:15}} />
                <Text style={{color: '#FFF', fontFamily: 'Raleway-SemiBold', fontSize: 20}}>Harry Potter</Text>
              </View>
            </View>
            <View style={ThemesStyle.row}>
              <View style={ThemesStyle.box2}>
                <Image
                  source={require('./../assets/icons/Like.png')}
                  style={{height: 28, width: 28, marginRight: 13, alignSelf: 'flex-end'}}
                />
              <Icon name="bug" size={80} color="#FFFFFF" style={{marginBottom:15}} />
                <Text style={{color: '#FFF', fontFamily: 'Raleway-SemiBold', fontSize: 20}}>Animals</Text>
              </View>
              <View style={ThemesStyle.box1}>
                <Image
                  source={require('./../assets/icons/Like.png')}
                  style={{height: 28, width: 28, marginRight: 13, alignSelf: 'flex-end'}}
                />
              <Icon name="music" size={80} color="#FFFFFF" style={{marginBottom:15}} />
                <Text style={{color: '#FFF', fontFamily: 'Raleway-SemiBold', fontSize: 20}}>Music</Text>
              </View>
            </View>
          </View>
        );
        break;
      case '4':
      content = (
        <View style={ThemesStyle.container}>
          <View style={ThemesStyle.row}>
            <View style={ThemesStyle.custom}>
              <Image
                source={require('./../assets/icons/PlusMathFilledWhite.png')}
                style={{height: 80, width: 80}}
              />
            <Text style={{color: '#FFF', fontFamily: 'Raleway-SemiBold', fontSize: 20}}>Add New Deck</Text>
            </View>
            <View style={ThemesStyle.block}>
            </View>
          </View>
          <View style={ThemesStyle.row}>
            <View style={ThemesStyle.block}>
            </View>
            <View style={ThemesStyle.block}>
            </View>
          </View>
        </View>
      );
      break;
      default:
        break;
    }
    return(
      <View style={{flex: 1}}>
        {content}
      </View>
    );
  }
}

const ThemesStyle = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
  },
  box1:{
    backgroundColor: '#CD5500',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box2:{
    backgroundColor: '#377DB8',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  block:{
    flex: 1,
  },
  custom:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#EE9D0C',
  },
});
