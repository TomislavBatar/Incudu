import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
        secureInput : props.inputType === 'text' || props.inputType === 'email' ? false : true,
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  toggleShowPassword(){
    this.setState({ secureInput : !this.state.secureInput});
  }
  render() {
    const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle, onChangeText } = this.props;
    const { secureInput } = this.state;
    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{color, fontSize}, styles.label]}> { labelText } </Text>
        { inputType === 'password' ?
            <TouchableOpacity
                style={styles.showButton}
                onPress={this.toggleShowPassword}
            >
                <Text
                    style={styles.showButtonText}
                >{ secureInput ? 'Show' : 'Hide'}</Text>    
            </TouchableOpacity>
        : null }
        <TextInput 
            autoCorrect={false}
            style={[{color: inputColor, borderBottomColor: borderBottom}, styles.inputField]}
            secureTextEntry={secureInput}
            onChangeText={onChangeText} 
        />
      </View>
    );
  } 
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func, 
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
    showButton:{
        position: 'absolute',
        right: 0,
    },  
    showButtonText:{
        color: colors.white,
        fontWeight: '700',
    },
});