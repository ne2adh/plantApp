import { StyleSheet } from 'react-native';
import * as colors from './colors';
import * as sizes from './sizes';
import * as fonts from './fonts';


const page = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const typography = StyleSheet.create({
	header: {
		color: colors.accent,
		fontSize: fonts.h1,
		marginBottom: 36
	}
});

const login_styles = StyleSheet.create({
	login: {
		flex: 1,
		justifyContent: "center"
	},
	input: {
		borderRadius: 0,
		borderWidth: 0,
		borderBottomColor: theme.colors.gray2,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	hasErrors: {
		borderBottomColor: theme.colors.accent
	}
});

export { page, typography, login_styles, colors, sizes, fonts };