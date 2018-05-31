import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './app/screens/Bookcase';
import Explore from './app/screens/Explore';
import AddBook from './app/screens/AddBook';
import Lists from './app/screens/Lists';
import Profile from './app/screens/Profile';
import EditBook from './app/screens/EditBook';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: {
      tabBarLabel: 'Bookcase',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-map-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      )
    }
  },
  'Add Book': {
    screen: AddBook,
    navigationOptions: {
      tabBarLabel: 'Add Book',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-add-circle-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      )
    }
  },
  Lists: {
    screen: Lists,
    navigationOptions: {
      tabBarLabel: 'Lists',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-person-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      )
    }
  }
});

export const BookcaseStack = createStackNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  EditBook: {
    screen: EditBook,
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    })
  }
});

export const CreateRootNavigator = createStackNavigator(
  {
    RouteNameOne: Bookcase,
    RouteNameTwo: Profile,
    RouteNameThree: Bookcase
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);

export const CreateRootNavigator2 = createStackNavigator(
  {
    BookcaseStack: {
      screen: BookcaseStack,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);
