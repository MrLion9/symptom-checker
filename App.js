import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import { Provider } from 'react-redux';

import { NativeRouter, Link } from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'
import { withRouter } from 'react-router-dom'

import SelectYear from './app/containers/SelectYear'
import SelectGender from './app/containers/SelectGender'

import createStore from './app/store';

import AppWithNavigationState from './app/index';

export default () => (
  <Provider store={createStore()}>
    <NativeRouter>
      <Navigation>
        <Card
          exact
          path="/"
          title="Year of birth"
          backButtonTitle="Back"
          component={withRouter(SelectYear)}
        />
        <Card
          path="/gender"
          title="Gender"
          backButtonTitle="Back"
          component={withRouter(SelectGender)}
        />
        <Card
          path="/search"
          title="Search"
          backButtonTitle="Back"
          component={withRouter(AppWithNavigationState)}
        />
      </Navigation>
    </NativeRouter>
  </Provider>
);
