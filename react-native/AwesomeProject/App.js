import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LotsOfGreetings from './components/LotsOfGreetings'
import SampleImage from './components/SampleImage'
import BlinkEffect from './components/BlinkEffect'
import FixedDeminsionsBasics from './components/FixedDeminsionsBasics'
import TextInput from './components/TextInput'
import ButtonBasics from './components/ButtonBasics'
import SampleScrollView from './components/SampleScrollView'
import FlatListBasic from './components/FlatListBasic'
import SectionListBasic from './components/SectionListBasic'
import Networking from './components/Networking'

export default class App extends React.Component {
  render() {
    return (
      <Networking />
      // <SectionListBasic />
      // <FlatListBasic />
      // <SampleScrollView />
      // <ButtonBasics />
      // <FixedDeminsionsBasics />
      // <View style={styles.container}>
      //   <LotsOfGreetings />
      //   <SampleImage />
      //   <BlinkEffect />
      //  <TextInput />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
