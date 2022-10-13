import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
	ScrollView,
	Image,
} from "react-native";
import React from "react";
import { globalStyles } from "../UI/stylesheet";
import { Theme } from "../UI/Theme";
import { API_KEY } from "react-native-dotenv";
import axios from "axios";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("screen");

const filter_asset_id = ["BTC", "ETH", "SLP", "ADA"];

const ASSETS = [
	{
		title: "BTC",
		image: "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png",
		price: 19180,
	},
	{
		title: "ETH",
		image: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
		price: 2990,
	},
	{
		title: "ADA",
		image: "https://s2.coinmarketcap.com/static/img/coins/200x200/2010.png",
		price: 0.385435234,
	},
	{
		title: "SLP",
		image: "https://s2.coinmarketcap.com/static/img/coins/200x200/5824.png",
		price: 0.033523453,
	},
];

const _renderCoin = ({ item, index }) => {
	return (
		<View style={screenStyles.assetContainer}>
			<Image
				source={{ uri: item.image }}
				style={screenStyles.assetImage}
				resizeMode="contain"
			/>
			<Text style={screenStyles.assetId}>{item.title}</Text>
			<Text style={screenStyles.assetPrice}>
				{item.price.toFixed(2).toString()}
			</Text>
		</View>
	);
};

const Home = () => {
	return (
		<SafeAreaView style={globalStyles.androidSafeArea}>
			<View style={screenStyles.header}>
				<Text style={screenStyles.welcome}>Home</Text>
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={ASSETS}
					renderItem={({ item, index }) => _renderCoin({ item, index })}
					contentContainerStyle={{
						flex: 1,
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

const screenStyles = StyleSheet.create({
	assetPrice: {
		fontFamily: "Roboto",
		fontSize: 14,
		fontWeight: "bold",
		position: "absolute",
		right: 20,
		color: Theme.primary,
	},
	assetImage: {
		width: 60,
		height: 60,
		marginLeft: 10,
	},
	assetContainer: {
		marginHorizontal: width * 0.04,
		alignItems: "center",
		width: "90%",
		flexDirection: "row",
		marginVertical: 20,
		height: 80,
		backgroundColor: "white",
		borderRadius: 10,
	},
	assetId: {
		fontFamily: "Roboto",
		color: "#343434",
		fontWeight: "700",
		fontSize: 18,
		marginLeft: 12,
	},
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
