import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	Pressable,
	ScrollView,
} from "react-native";
import { useAuth } from "@/components/auth-context";
import AuthModal from "@/components/AuthModal";
import InfoFormModal from "@/components/InfoFormModal";
import shibaLogo from "@/assets/images/shibaLogo.jpg";

const Profile = () => {
	const { isAuthenticated, user, logout } = useAuth();
	const [isAuthVisible, setAuthVisible] = useState(false);
	const [isInfoFormVisible, setInfoFormVisible] = useState(false);

	// if (!isAuthenticated) {
	// 	return (
	// 		<SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
	// 			<Text className="text-3xl mb-4">Вы не авторизованы</Text>
	// 			{}
	// 			<Pressable
	// 				className="flex p-[0.4rem] bg-blue-500 border-none rounded-lg"
	// 				onPress={() => setAuthVisible(true)}
	// 			>
	// 				<Text className="text-lg">Открыть Авторизацию</Text>
	// 			</Pressable>
	// 			<AuthModal
	// 				isVisible={isAuthVisible}
	// 				onClose={() => setAuthVisible(false)}
	// 			/>
	// 		</SafeAreaView>
	// 	);
	// }

	return (
		<View className="flex-1 bg-[#8D7B68]">
			<SafeAreaView className="flex-1 items-center mt-[3rem] gap-[1rem] ">
				<View className="flex-row w-full h-[13rem] border rounded-xl items-center">
					<View className="flex-col w-[8rem] h-full mx-[0.5rem] gap-[1rem] items-center justify-center ">
						<Image
							source={shibaLogo}
							resizeMode="cover"
							className="w-[8rem] h-[8rem] rounded-xl"
						/>
						<Pressable
							className="flex w-[8rem] h-[2.5rem] items-center justify-center bg-white border-2 border-gray-400 rounded-lg"
							onPress={() => setInfoFormVisible(true)}
						>
							<Text className="text-center ">Пройти анкету</Text>
						</Pressable>
						<InfoFormModal
							isVisible={isInfoFormVisible}
							onClose={() => setInfoFormVisible(false)}
						/>
					</View>
					{/* Я думаю инфу об пользователе тоже надо вынести в отдельный компонент */}
					<View className="flex h-full w-full justify-center   gap-[1rem]">
						<Text className="text-xl">Имя: {user?.name}</Text>
						<Text className="text-xl">logIn: {user?.logIn}</Text>
						<Text className="text-xl">Порода собаки: {user?.dogBreed}</Text>
						<Text className="text-xl">Кличка собаки: {user?.dogName}</Text>
						<Text className="text-xl">Возраст собаки: {user?.dogAge}</Text>
					</View>
				</View>
				<View className="flex w-full gap-[1rem] ml-[0.5rem]">
					<Text className="text-black text-3xl text-left">Ваши курсы:</Text>

					{/* Вынести в отедльный компонент структуру\вид контейнера курса,
						и потом просто через map его тут рендерить,
						или ченрез FlatList, то есть /(название компонента самого курса).map/ */}

					<ScrollView
						className="flex h-ful gap-[2rem]"
						contentContainerStyle={{ gap: 16 }}
					>
						<Text className="text-xl h-[7rem] border rounded-xl items-center  text-white">
							Курс 1
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white ">
							Курс 2
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white">
							Курс 3
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white">
							Курс 3
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white">
							Курс 3
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white">
							Курс 3
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white">
							Курс 3
						</Text>
						<Text className="text-xl h-[7rem] border rounded-xl items-center text-white">
							Курс 3
						</Text>
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Profile;
