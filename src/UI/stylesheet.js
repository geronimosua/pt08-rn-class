import { StyleSheet, Platform } from "react-native";
import { Theme } from "./Theme";

export const globalStyles = StyleSheet.create({
	androidSafeArea: {
		flex: 1,
		backgroundColor: Theme.background,
		paddingTop: Platform.OS === "android" ? 15 : 0,
	},
});
