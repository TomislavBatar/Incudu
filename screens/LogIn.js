import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        };

        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }


    handleNextButton() {
        if (this.state.emailAddress === 'Tomo@gmail.com' && this.state.validPassword) {
            alert('Success')
            this.setState({ formValid: true });
        } else {
            this.setState({ formValid: false });
        }
    };

    handleNextButton() {
        this.setState({ loadingVisible: true });
        setTimeout(() => {
            if (this.state.emailAddress === 'Tomo@gmail.com' && this.state.validPassword) {
                this.setState({ formValid: true, loadingVisible: false });
                alert('Success')
            } else {
                this.setState({ formValid: false, loadingVisible: false });
            }
        }, 4000);
    };


    handleCloseNotification() {
        this.setState({ formValid: true });
    };





    // change on handleEmailChange function

    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({ emailAddress: email });

        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else if (!emailCheckRegex.test(email)) { 
            this.setState({ validEmail: false });
        }

    };







    handlePasswordChange(password) {
        if (!this.state.validPassword) {
            if (password.length > 4) {
                this.setState({ validPassword: true });
            }
        } else if (password <= 4) {
            this.setState({ validPassword: false });
        }
    };
    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state;
        if (validEmail && validPassword) {
            return false;
        }
        //  else if (validEmail || validPassword) {
        //    return false ;} 
        return true;

    };
    render() {
        const { formValid, loadingVisible, validEmail, validPassword } = this.state;
        const showNotification = formValid ? false : true;
        const notificationMarginTop = showNotification ? 10 : 0;
        return (
            <KeyboardAvoidingView style={styles.wrapper}
                behavior="padding"
            >
                <View style={styles.ScrollViewWrapper}>
                    <ScrollView style={styles.ScrollView}>
                        <Text style={styles.loginHrader}>Log In</Text>

                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus={true}

                        />

                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                            disabled={this.toggleNextButtonState()}
                        />
                    </View>
                    <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                        <Notification
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error"
                            firstLine="Those credentials don't look right."
                            secondLine="Please try again."
                        />
                    </View>
                </View>
                <Loader
                    modalVisible={loadingVisible}
                    animationType="fade"
                />
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
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
    },
});
