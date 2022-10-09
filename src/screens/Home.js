import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../UI/stylesheet";
import { Theme } from "../UI/Theme";

const Home = () => {
	return (
		<SafeAreaView style={globalStyles.androidSafeArea}>
			<View style={screenStyles.header}>
				<Text style={screenStyles.welcome}>Home</Text>
			</View>
		</SafeAreaView>
	);
};

const screenStyles = StyleSheet.create({
	welcome: {
		fontSize: 32,
		fontFamily: "Roboto",
		fontWeight: "700",
		color: Theme.paragraph,
	},
	header: {
		paddingVertical: 22,
		paddingHorizontal: 16,
	},
});

export default Home;
