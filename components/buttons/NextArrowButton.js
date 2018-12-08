import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NextArrowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { disabled } = this.props;
    const opacityStyle = disabled ? {backgroundColor: 'rgba(255,255,255, 0.2)'} : {backgroundColor: 'rgba(255,255,255, 0.6)'}
    return (
      <TouchableHighlight
        style={[opacityStyle, styles.button]}
      >
          <Icon 
            name="angle-right"
            color={colors.tintColor}
            size={32}
            style={styles.icon}
          />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
    },
    icon:{
        marginRight: -2,
        marginTop: -2,
    },
});