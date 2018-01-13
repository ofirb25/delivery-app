import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Splash from './Splash'
import Main from './Main'
import {StackNavigator} from 'react-navigation';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isSplash: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isSplash: false })
    }, 2000)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.isSplash ? <Splash /> : <Main 
        navigation={this.props.navigation}/>}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
