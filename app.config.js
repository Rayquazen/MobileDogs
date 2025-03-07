import "dotenv/config";

export default {
	expo: {
		name: "MobileDogs",
		slug: "MobileDogs",
		extra: {
			API_HOST: process.env.EXPO_PUBLIC_API_HOST,
		},
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/images/shibaLogo.jpg",
		scheme: "myapp",
		userInterfaceStyle: "automatic",
		newArchEnabled: true,
		ios: {
			supportsTablet: true,
		},
		android: {
			usesCleartextTraffic: true,
			adaptiveIcon: {
				foregroundImage: "./assets/images/shibaLogo.jpg",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			bundler: "metro",
			output: "static",
			favicon: "./assets/images/favicon.png",
		},
		plugins: [
			"expo-router",
			[
				"expo-splash-screen",
				{
					image: "./assets/images/shibaLogo.jpg",
					imageWidth: 200,
					resizeMode: "contain",
					backgroundColor: "#ffffff",
				},
			],
			"expo-secure-store",
		],
		experiments: {
			typedRoutes: true,
		},
	},
};
