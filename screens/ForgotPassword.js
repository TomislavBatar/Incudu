import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import InputField from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Loader from '../components/Loader';

export default class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValid: true,
			loadingVisible: false,
			validEmail: false,
			emailAddress: '',
		};
		
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.goToNextStep = this.goToNextStep.bind(this);
		this.handleCloseNotification = this.handleCloseNotification.bind(this);
	}

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
	}
	goToNextStep(){
		this.setState({ loadingVisible: true });
		setTimeout(() => {
			if (this.state.emailAddress === 'Tomo@gmail.com') {
				this.setState({ 
					loadingVisible: false,
					formValid: true,
				});
				alert('Check your email inbox...');
			} else {
				this.setState({ 
					loadingVisible: false,
					formValid: false,
				});
			}
		}, 2000);
	}

	handleCloseNotification() {
        this.setState({ formValid: true });
    }


	render() {
		const { loadingVisible,formValid, validEmail } = this.state;
		const showNotification = formValid ? false : true;
		return (
			<KeyboardAvoidingView
				style={styles.wrapper}
				behavior="padding"
			>
				<View style={styles.form}>
					<Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
					<Text style={styles.forgotPasswordSubheading}>Enter your email to find your account.</Text>
					<InputField
						customStyle={{ marginBottom: 30 }}
						textColor={colors.white}
						labelText="EMAIL ADDRESS"
						labelTextSize={14}
						labelColor={colors.white}
						borderBottomColor={colors.white}
						inputType="email"
						onChangeText={this.handleEmailChange}
						showCheckmark={validEmail}
					/>
				</View>
				<View style={styles.nextButtonWrapper}>
					<NextArrowButton 
						handleNextButton={this.goToNextStep}
						disabled={!validEmail}
					/>
				</View>
				<View>
					<Notification					
						showNotification={showNotification}
						handleCloseNotification={this.handleCloseNotification}
						type="Error"
						firstLine="No account exist for the requested"
						secondLine="email address"
					/>					
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
	form: {
		marginTop: 90,
		paddingLeft: 20,
		paddingRight: 20,
		flex: 1,
	},
	forgotPasswordHeading: {
		fontSize: 28,
		color: colors.white,
		fontWeight: '300',
	},
	forgotPasswordSubheading: {
		color: colors.white,
		fontWeight: '600',
		fontSize: 15,
		marginTop: 10,
		marginBottom: 60,
	},
	nextButtonWrapper: {
		alignItems: 'flex-end',
        marginRight: 20,
        marginBottom: 20,
	},
});