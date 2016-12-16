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
import payload from '../assets/words.json';

export default
class MainGameEvent extends Component {
  constructor(){
    super();
    this.state = {words: [], theme: 0, counter: 0, activeScreen: 'word', time: 60};
    this.update = this.update.bind(this);
    this.chooseWords = this.chooseWords.bind(this);
    this.selectWords = this.selectWords.bind(this);
  }

  update(data) {
    console.log(`${data.x}, ${data.z}`);
    if(Math.abs(this.x-data.x) > 1) {
      const trigger = data.x < 7.5 && data.x > 6;
      if(trigger && data.z < -1) {
        this.setState({activeScreen: 'correct'});
        setTimeout(() => {
          this.setState({activeScreen: 'word', words: this.selectWords(this.state.theme), counter:this.state.counter+1});
        }, 1500);
      }
      if(trigger && data.z > 1) {
        this.setState({activeScreen: 'pass'});
        setTimeout(() => {
          this.setState({activeScreen: 'word', words: this.selectWords(this.state.theme)});
        }, 1500);
      }
    }
    this.x = data.x;
    this.z = data.z;
    let inGame = data.x > 8.5 ? true : false;
  }



  chooseWords(list){
    let currentIndex = Math.floor(Math.random()*list.length);
    let newWord = list[currentIndex];
    list.splice(currentIndex, 1);
    return newWord;
  }

  selectWords(themeID) {
    switch (themeID) {
      case '1':
        return this.chooseWords(this.state.wordList.famousPeople);
        break;
      case '2':
        return this.chooseWords(this.state.wordList.HarryPotter);
        break;
      case '3':
        return this.chooseWords(this.state.wordList.animals);
        break;
      case '4':
        return this.chooseWords(this.state.wordList.music);
        break;
      default:
        break;
    }
  }

  componentWillMount() {
    this.AccelCheck = DeviceEventEmitter.addListener('Accelerometer', this.update);
    SensorManager.startAccelerometer(50);
    let wordLoad = JSON.parse(JSON.stringify(payload))
    this.setState({wordList: wordLoad, theme: this.props.themeID});
  }

  componentDidMount() {
    this.setState({words: this.selectWords(this.props.themeID)});
    this.timer = setInterval(() => {
      this.setState({time: this.state.time-1});
      if(this.state.time <= 0) {
        clearInterval(this.timer);
        SensorManager.stopAccelerometer();
        this.AccelCheck.remove();
        this.props.nextScene(this.state.counter);
      }
    }, 1000);
  }

  componentWillUnmount() {
    SensorManager.stopAccelerometer();
    this.AccelCheck.remove();
    clearInterval(this.timer);
  }

  render() {
    let content = {};
    switch(this.state.activeScreen){
      case 'correct':
        content = (
          <View style={MainGamePageStyle.correct}>
            <Text style={MainGamePageStyle.message}>CORRECT</Text>
          </View>
        );
        break;
      case 'word':
        content = (
          <View style={MainGamePageStyle.container}>
            <View style={MainGamePageStyle.timer}>
              <Text style={MainGamePageStyle.timerText}>{this.state.time}</Text>
            </View>
            <View style={MainGamePageStyle.word}>
              <Text style={MainGamePageStyle.wordText}>{this.state.words}</Text>
            </View>
          </View>
        );
        break;
      case 'pass':
        content = (
          <View style={MainGamePageStyle.pass}>
            <Text style={MainGamePageStyle.message}>PASS</Text>
          </View>
        );
        break;
    }
    return(
      <View style={{flex: 1}}>
        {content}
      </View>
    );
  }
}

const MainGamePageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4294DB',
    alignItems: 'center',
  },
  word: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Raleway-SemiBold',
  },
  wordText: {
    fontSize: 65,
    color: '#FFFFFF',
    fontFamily: 'Raleway-SemiBold',
  },
  timerText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Raleway-SemiBold',
  },
  correct: {
    flex: 1,
    backgroundColor: '#43AA71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 65,
    color: '#FFFFFF',
    fontFamily: 'Raleway-SemiBold',
  },
  pass: {
    flex: 1,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
