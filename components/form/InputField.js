import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { labelText, labelTextSize, labelColor } = this.props;
    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    return (
      <View style={styles.wrapper}>
        <Text style={[{color, fontSize}, styles.label]}> { labelText } </Text>
        <TextInput 
            autoCorrect={false}
            style={styles.inputField}
        />
      </View>
    );
  }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label:{
        fontWeight:'700', // '700'
        marginBottom: 10,
        // color: colors.white, 
    },
    inputField:{
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },
});