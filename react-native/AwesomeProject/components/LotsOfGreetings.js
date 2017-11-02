import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text style={this.props.style}>Hello {this.props.name}!</Text>
    )
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Alex' />
        <Greeting name='Dean' />
        <Greeting name='Varick' style={styles.bigblue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  }
});
