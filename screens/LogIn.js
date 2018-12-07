import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import InputField from '../components/form/InputField';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.ScrollViewWrapper}>
                    <ScrollView style={styles.ScrollView}>
                        <Text style={styles.loginHrader}>Log In</Text>
                        
                        <InputField 
                            labelText="EMAIL ADRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                        />
                        <InputField 
                            labelText="PSSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                        />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.tintColor,

    },
    ScrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    loginHrader: {
        fontSize: 35,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },  
    ScrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },  
});
