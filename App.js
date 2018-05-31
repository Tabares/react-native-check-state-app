import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bookcase from './app/screens/Bookcase';
import { CreateRootNavigator, BookcaseStack, Tabs } from './router';

export default class App extends React.Component {
  render() {
    return <CreateRootNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
