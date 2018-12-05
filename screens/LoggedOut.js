import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableHighlight } from 'react-native';
import colors from '../constants/Colors';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoggedOut extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	onFacebookPress() {
		alert('Facebook button pressed');
	}
	onCreateAccountPress() {
		alert('Create Account button pressed');
	}

	onMoreOptionsPress() {
		alert('More option button pressed');
	}


	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.welcomeWrapper}>
					<Image
						source={require('../assets/images/robot-dev.png')}
						style={styles.logo}
					/>
					<Text style={styles.welcomeText}>Welcome to Incudu.</Text>

					<RoundedButton
						text="Continue with Facebook"
						textColor={colors.tintColor}
						background={colors.white}
						icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
						handleOnPress={this.onFacebookPress}
					/>
					<RoundedButton
						text="Create Account"
						textColor={colors.white}
						handleOnPress={this.onCreateAccountPress}
					/>

					<TouchableHighlight style={styles.moreOptionsButton}
						onPress={this.onMoreOptionsPress}
					>
						<Text style={styles.moreOptionsButtonText}>More options</Text>
					</TouchableHighlight>
					<View style={styles.termsAndConditions}>
						<Text style={styles.termsText}>By tapping Continue, Create Account or More</Text>
						<Text style={styles.termsText}>options, I agree to Incudu's </Text>
						<TouchableHighlight style={styles.linkButton}>
							<Text style={styles.termsText}>Terms of Service</Text>
						</TouchableHighlight>
						<Text style={styles.termsText}>, </Text>
						<TouchableHighlight style={styles.linkButton}>
							<Text style={styles.termsText}>Payment Terms of Service</Text>
						</TouchableHighlight>
						<Text style={styles.termsText}>, </Text>
						<TouchableHighlight style={styles.linkButton}>
							<Text style={styles.termsText}>Privacy Policy</Text>
						</TouchableHighlight>
						<Text style={styles.termsText}>, and </Text>
						<TouchableHighlight style={styles.linkButton}>
							<Text style={styles.termsText}>Nondiscrimination Policy</Text>
						</TouchableHighlight>
						<Text style={styles.termsText}> .</Text>
					</View>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		display: 'flex',
		backgroundColor: colors.tintColor,
	},
	welcomeWrapper: {
		flex: 1,
		display: 'flex',
		marginTop: 30,
		padding: 20,
	},
	logo: {
		width: 50,
		height: 50,
		marginTop: 50,
		marginBottom: 40,
	},
	welcomeText: {
		fontSize: 30,
		color: colors.white,
		fontWeight: '300',
		marginBottom: 40,
	},
	facebookButtonIcon: {
		color: colors.tintColor,
		position: 'relative',
		left: 25,
		zIndex: 8,
	},
	moreOptionsButton: {
		marginTop: 15,
	},	
	moreOptionsButtonText :{
		color: colors.white,
		fontSize: 16,
	},
	termsAndConditions:{
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'row',
		marginTop: 30,
	},
	termsText:{
		color: colors.white,
		fontSize: 12,
		fontWeight: '400',
	},
	linkButton:{
		borderBottomWidth:1,
		borderBottomColor: colors.white,
	},
});
