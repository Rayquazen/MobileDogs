import React, { useEffect, useState } from "react";
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
import Constants from "expo-constants";
import { course } from "@/constants/types";
import { fetchWithAuth } from "@/constants/fetchWithAuth";
import ProfileLessonsList from "@/components/ProfileLessonsList";

const Profile = () => {
	const { isAuthenticated, user, logout } = useAuth();
	const [isAuthVisible, setAuthVisible] = useState(false);
	const [isInfoFormVisible, setInfoFormVisible] = useState(false);

	// Крч тут будет отслеживаться пройдена ли форма у пользователя,
	// и при useEffect мы будем доставать данные у пользователя в столбце "пройденная анкета" true/fasle,
	// чтобы потом следить этот стейт и после логина/регистрации,
	// проверяя это состояние, сразу открывалась анкета если она не пройдена
	// плюс рендерилась надписть "пройти анкету"
	const [isInfoFormDone, setInfoFormDone] = useState(false);

	const [lessons, setLessons] = useState<course[]>([]);

	useEffect(() => {
		async function fetchCourses() {
			try {
				const API_HOST = Constants.expoConfig?.extra?.API_HOST;

				const response = await fetchWithAuth(`${API_HOST}/admin/courses`);
				if (!response.ok) throw new Error("Ошибка загрузки курсов");

				const data: course[] = await response.json();
				setLessons(data);
				console.log("Все отлично!", data);
			} catch (error) {
				console.log("Ошибочка", error);
			}
		}
		fetchCourses();
	}, []);

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
			<SafeAreaView className="flex-1 items-center mt-[3rem] gap-[1rem] ">
				<InfoFormModal
					isVisible={isInfoFormVisible}
					onClose={() => setInfoFormVisible(false)}
				/>
				<View className="flex-row w-full h-[13rem] border rounded-xl items-center">
					<View className="flex-col w-[8rem] h-full mx-[0.5rem] gap-[1rem] items-center justify-center ">
						<Image
							source={shibaLogo}
							resizeMode="cover"
							className="w-[8rem] h-[8rem] rounded-xl"
						/>
						{!isInfoFormDone && (
							<Pressable
								className="flex w-[8rem] h-[2.5rem] items-center justify-center bg-white border-2 border-gray-400 rounded-lg"
								onPress={() => setInfoFormVisible(true)}
							>
								<Text className="text-center ">Пройти анкету</Text>
							</Pressable>
						)}
					</View>
					{/* Я думаю инфу об пользователе тоже надо вынести в отдельный компонент */}
					<View className="flex h-full w-full justify-center   gap-[1rem]">
						<Text className="text-xl">Имя: {user?.name}</Text>
						<Text className="text-xl">Логин: {user?.user_login}</Text>
						<Text className="text-xl">Порода собаки: {user?.dogBreed}</Text>
						<Text className="text-xl">Кличка собаки: {user?.dogName}</Text>
						<Text className="text-xl">Возраст собаки: {user?.dogAge}</Text>
					</View>
				</View>

				<View className="flex-1 flex-col w-full gap-[1rem] ml-[0.5rem] ">
					{/* Вынести в отедльный компонент структуру\вид контейнера курса,
						и потом просто через map его тут рендерить,
						или ченрез FlatList, то есть /(название компонента самого курса).map/ */}
					<View className="flex-row">
						<Text className="text-black text-3xl text-left">Ваши курсы:</Text>
					</View>
					<View className="flex-1 flex-col items-center justify-center">
						<ScrollView
							className="flex-c h-ful gap-[2rem]"
							contentContainerStyle={{ gap: 15 }}
						>
							{lessons.map((item) => (
								<ProfileLessonsList
									key={item.id}
									id={item.id}
									name={item.name}
									description={item.description}
									amount={item.amount}
									with_modules={false}
								></ProfileLessonsList>
							))}
						</ScrollView>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Profile;
