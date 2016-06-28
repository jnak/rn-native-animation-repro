import {
  requireNativeComponent,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { Component }  from 'react';

const NativeLoader = requireNativeComponent('OIReactNativeLoader', {name: 'NativeLoader', propTypes: {}});

const Loader = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    style: React.PropTypes.number,
  },
  
  render() {
    const style = this.props.style || {};
    
    return <NativeLoader  style={style} />;
  },
});

export {
  Loader,
};

class Animation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Loader style={styles.loader}/>
      </View>
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
  loaderContainer: {
    backgroundColor: 'red',
    bottom: 10,
    padding: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    width: 250,
    height: 250,
  },
  loader: {
    backgroundColor: 'yellow',
    width: 250,
    height: 250,
  },
});

AppRegistry.registerComponent('Animation', () => Animation);
