import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import { useAuth } from "@/components/auth-context";
import AuthModal from "@/components/AuthModal";
import shibaLogo from "@/assets/images/shibaLogo.jpg";

const Profile = () => {
	const { isAuthenticated, user, logout } = useAuth();
	const [isAuthVisible, setAuthVisible] = useState(false);

	if (!isAuthenticated) {
		return (
			<SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
				<Text className="text-3xl mb-4">Вы не авторизованы</Text>
				<Pressable
					className="flex p-[0.4rem] bg-blue-500 border-none rounded-lg"
					onPress={() => setAuthVisible(true)}
				>
					<Text className="text-lg">Открыть Авторизацию</Text>
				</Pressable>
				<AuthModal
					isVisible={isAuthVisible}
					onClose={() => setAuthVisible(false)}
				/>
			</SafeAreaView>
		);
	}

	return (
		<View className="flex-1 bg-[#8D7B68]">
			<SafeAreaView className="flex-1 items-center mt-[3.5rem] gap-[1rem] ">
				<View className="flex-row w-full h-[15rem] border rounded-xl items-center gap-[1rem]">
					<View className="flex w-[7rem] h-[7rem] mx-[0.5rem]  items-center justify-center">
						<Image
							source={shibaLogo}
							resizeMode="cover"
							className="w-[7rem] h-[7rem] rounded-xl"
						/>
					</View>
					<View className="flex h-full w-full justify-center  gap-[1rem]">
						<Text className="text-xl">Имя: {user?.name}</Text>
						<Text className="text-xl">Email: {user?.email}</Text>
						<Text className="text-xl">Порода собаки: {user?.dogBreed}</Text>
						<Text className="text-xl">Кличка собаки: {user?.dogName}</Text>
					</View>
				</View>
				<View className="flex w-full bg-red-300">
					<Text className="text-white text-xl text-left">Ваши курсы:</Text>
					<View className="flex w-full gap-[1rem]">
						<Text className="text-xl">Курс 1</Text>
						<Text className="text-xl">Курс 2</Text>
						<Text className="text-xl">Курс 3</Text>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Profile;
