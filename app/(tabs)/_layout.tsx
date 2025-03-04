import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import {
	Entypo,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabsLayout = () => {
	return (
		<Tabs
			initialRouteName="index"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: "Главная",
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="courses"
				options={{
					tabBarLabel: "Курсы",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="dog" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabel: "Профиль",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
