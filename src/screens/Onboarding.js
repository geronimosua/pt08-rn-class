import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { Theme } from "../UI/Theme";
import { globalStyles } from "../UI/stylesheet";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const { width, height } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
	const [userName, setUserName] = React.useState("");

	return (
		<SafeAreaView style={globalStyles.androidSafeArea}>
			<View style={styles.container}>
				<Text style={styles.title}>Tell us your name</Text>

				<View style={styles.nameInputContainer}>
					<TextInput
						style={styles.nameInput}
						onChangeText={(value) => setUserName(value)}
					/>
				</View>
			</View>
			<View
				style={{
					justifyContent: "flex-end",
					width: "80%",
					marginBottom: 32,
					alignSelf: "center",
				}}
			>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Home")}
				>
					<Text style={styles.buttonText}>Continue</Text>
					<AntDesign
						name="arrowright"
						size={24}
						color={Theme.paragraph}
						style={{ position: "absolute", right: 20 }}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		alignSelf: "center",
		color: Theme.paragraph,
		fontFamily: "Roboto",
		fontWeight: "bold",
		fontSize: 20,
	},
	button: {
		height: 40,
		width: "100%",
		backgroundColor: Theme.primary,
		alignSelf: "center",
		justifyContent: "center",
		borderRadius: 8,
		elevation: 2,
	},
	nameInput: {
		width: "100%",
		paddingLeft: 12,
		textAlignVertical: "center",
		fontWeight: "700",
		color: Theme.background,
	},
	nameInputContainer: {
		width: width * 0.6,
		height: 32,
		backgroundColor: "white",
		elevation: 8,
		borderRadius: 10,
		marginTop: 12,
		justifyContent: "center",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontFamily: "Roboto",
		fontSize: 24,
		fontWeight: "700",
		color: Theme.paragraph,
	},
});

export default Onboarding;
