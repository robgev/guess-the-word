import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  StatusBar,
} from 'react-native';
import Orientation from 'react-native-orientation';
import Homepage from './lib/Homepage';
import Decks from './lib/Decks';

class GuessTheWord extends Component {
  componentWillMount(){
    Orientation.lockToLandscape();
    StatusBar.setHidden(true);
  }
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Main Menu', index: 1},
      {title: 'Game Deck', index: 2},
      {title: 'End Scene', index: 3}
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          if(route.index === 0)
            return <Homepage styles={styles} changeScene={() => navigator.push(routes[1])} />
          else
            return <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around', alignItems: 'center',}}><Decks/></View>
          }
        }
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498DB',
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 80,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
    marginBottom: 5,
    textShadowColor: '#2480BB',
    textShadowOffset: {width: -8, height: 5},
  },
  menu: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  versus: {
    flex: 1,
    backgroundColor: '#9B59B6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  single: {
    flex: 1,
    backgroundColor: '#1ABC9C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  other: {
    flex: 1,
  },
  more: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#33485D',
    justifyContent: 'center',
  },
  like: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#2C3E50',
    justifyContent: 'center',
  },
  howto: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#F1C40F',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('GuessTheWord', () => GuessTheWord);
