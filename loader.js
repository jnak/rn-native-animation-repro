import {
  requireNativeComponent,
} from 'react-native';
import React from 'react';
import {Color} from '../Shared/Styles';

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
