/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @flow
 */
'use strict';

// Export React, plus some native additions.
//
// The use of Object.create/assign is to work around a Flow bug (#6560135).
// Once that is fixed, change this back to
//
//   var ReactNative = {...require('React'), /* additions */}
//
var ReactNative = Object.assign(Object.create(require('React')), {
  // Components
  ActivityIndicatorIOS: require('ActivityIndicatorIOS'),
  DatePickerIOS: require('DatePickerIOS'),
  Image: require('Image'),
  ListView: require('ListView'),
  MapView: require('MapView'),
  NavigatorIOS: require('NavigatorIOS'),
  PickerIOS: require('PickerIOS'),
  ScrollView: require('ScrollView'),
  SliderIOS: require('SliderIOS'),
  SwitchIOS: require('SwitchIOS'),
  TabBarIOS: require('TabBarIOS'),
  Text: require('Text'),
  TextInput: require('TextInput'),
  TouchableHighlight: require('TouchableHighlight'),
  TouchableOpacity: require('TouchableOpacity'),
  TouchableWithoutFeedback: require('TouchableWithoutFeedback'),
  View: require('View'),
  WebView: require('WebView'),

  // APIs
  AlertIOS: require('AlertIOS'),
  Animation: require('Animation'),
  AppRegistry: require('AppRegistry'),
  AppState: require('AppState'),
  AppStateIOS: require('AppStateIOS'),
  AsyncStorage: require('AsyncStorage'),
  CameraRoll: require('CameraRoll'),
  InteractionManager: require('InteractionManager'),
  LayoutAnimation: require('LayoutAnimation'),
  NetInfo: require('NetInfo'),
  PixelRatio: require('PixelRatio'),
  StatusBarIOS: require('StatusBarIOS'),
  StyleSheet: require('StyleSheet'),
  TimerMixin: require('TimerMixin'),
  VibrationIOS: require('VibrationIOS'),

  addons: {
    batchedUpdates: require('ReactUpdates').batchedUpdates,
    LinkedStateMixin: require('LinkedStateMixin'),
    Perf: undefined,
    PureRenderMixin: require('ReactComponentWithPureRenderMixin'),
    TestUtils: undefined,
    cloneWithProps: require('cloneWithProps'),
    update: require('update'),
  },
});

if (__DEV__) {
  ReactNative.addons.Perf = require('ReactDefaultPerf');
  ReactNative.addons.TestUtils = require('ReactTestUtils');
}

module.exports = ReactNative;