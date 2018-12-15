import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

export default class NextArrowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.4 : 0.8;
    return (
      <TouchableHighlight
        style={[{opacity: opacityStyle}, styles.button]}
        onPress={handleNextButton}
        disabled={disabled}
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

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
    
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: colors.white,
    },
    icon:{ 
        marginRight: -2,
        marginTop: -2,
    },
});
