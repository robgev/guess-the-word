import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';
import Homepage from './lib/Homepage';
import Decks from './lib/Decks';

class GuessTheWord extends Component {
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
            return <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around', alignItems: 'center',}}>{Array(9).fill(<Decks />)}</View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fix: {
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('GuessTheWord', () => GuessTheWord);
