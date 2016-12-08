import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';
import Orientation from 'react-native-orientation';
import Homepage from './lib/Homepage';
import Decks from './lib/Decks';

class GuessTheWord extends Component {
  componentDidMount(){
    Orientation.lockToLandscape();
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
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 20,
  },
  menu: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
  },
  other: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('GuessTheWord', () => GuessTheWord);
