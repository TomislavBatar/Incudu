import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleNextButton() {
        alert('Next button is pressed');
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper}
                behavior="padding"
            >
                <View style={styles.ScrollViewWrapper}>
                    <ScrollView style={styles.ScrollView}>
                        <Text style={styles.loginHrader}>Log In</Text>

                        <InputField
                            labelText="EMAIL ADRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                        />
                    </View>
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
    nextButton: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginBottom: 20,
    },
});
