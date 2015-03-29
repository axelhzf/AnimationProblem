/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animation
} = React;

var AnimationProblem = React.createClass({
  getInitialState() {
    return {
      visible: true
    }
  },

  toggleVisible() {
    this.setState({
      visible: !this.state.visible
    });
    Animation.startAnimation(this.refs['block'], 300, 0, 'easeInQuad', {
      opacity: this.state.visible ? 1.0 : 0.0
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.block]} ref="block"></View>
        <TouchableHighlight onPress={() => this.toggleVisible()}>
          <View style={styles.button}>
            <Text>Toggle Opacity</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
});

var styles = {
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  },
  block: {
    position: "absolute",
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    padding: 20
  }

};

AppRegistry.registerComponent('AnimationProblem', () => AnimationProblem);
