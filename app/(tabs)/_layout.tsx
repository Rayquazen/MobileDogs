import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
					href: null,
				}}
			/>
			<Tabs.Screen
				name="courses"
				options={{
					tabBarLabel: "Курсы",
					tabBarIcon: ({ color }) => (
						<AntDesign name="book" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="blog"
				options={{
					tabBarLabel: "Блог",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="bone" size={24} color={color} />
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
