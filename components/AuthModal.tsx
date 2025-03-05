import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Switch,
	Pressable,
	TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "./auth-context";

interface AuthModalProps {
	isVisible: boolean;
	onClose: () => void;
}

const AuthModal = ({ isVisible, onClose }: AuthModalProps) => {
	const { login } = useAuth(); // Достаём login из контекста

	const [isRegister, setIsRegister] = useState(true); // true - регистрация, false - логин
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((prev) => !prev);

	const handleAuth = () => {
		const userData = {
			name: "Иван Иванов", // Здесь можно взять реальные данные из инпутов
			email: "ivan@example.com",
			dogBreed: "Лабрадор",
			dogName: "Рекс",
		};

		login(userData); // Авторизуем пользователя
		onClose(); // Закрываем модалку
	};

	return (
		<Modal isVisible={isVisible} onBackdropPress={onClose}>
			<View className="w-5/6 bg-slate-900 rounded-2xl p-6 self-center">
				<Text className="text-center text-3xl text-gray-300 mb-4">
					{isRegister ? "Регистрация" : "Вход"}
				</Text>

				<TextInput
					className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
					placeholder="Почта"
					placeholderTextColor="#B0B0B0"
				/>

				<TextInput
					className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
					placeholder="Пароль"
					placeholderTextColor="#B0B0B0"
					secureTextEntry
				/>

				{isRegister && (
					<TextInput
						className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
						placeholder="Повторите пароль"
						placeholderTextColor="#B0B0B0"
						secureTextEntry
					/>
				)}

				<View className="flex flex-row justify-between items-center mb-4">
					<Text className="text-slate-400">
						{isRegister ? "Согласие с правилами" : "Запомнить меня"}
					</Text>
					<Switch
						trackColor={{ false: "#767577", true: "#86efac" }}
						thumbColor={isEnabled ? "#86efac" : "#f4f3f4"}
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>

				<Pressable
					className="bg-[#6F58C1] py-3 px-4 rounded-md items-center text-white"
					onPress={handleAuth}
				>
					<Text className="text-white">
						{isRegister ? "Зарегистрироваться" : "Войти"}
					</Text>
				</Pressable>

				<View className="flex-row items-center justify-center mt-4">
					<View className="flex-1 h-px bg-gray-700" />
					<Text className="px-3 text-sm text-gray-400">
						{isRegister ? "Войти через соцсети" : "Войти с помощью"}
					</Text>
					<View className="flex-1 h-px bg-gray-700" />
				</View>

				<View className="flex-row gap-4 items-center justify-center mt-2">
					<TouchableOpacity className="p-3">
						<FontAwesome5 name="yandex" size={22} color="white" />
					</TouchableOpacity>
					<TouchableOpacity className="p-3">
						<FontAwesome name="vk" size={22} color="white" />
					</TouchableOpacity>
				</View>

				<Text className=" text-gray-400 text-center">
					{isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
					<Pressable onPress={() => setIsRegister(!isRegister)}>
						<Text className="text-white underline">
							{isRegister ? "Войти" : "Регистрация"}
						</Text>
					</Pressable>
				</Text>
			</View>
		</Modal>
	);
};

export default AuthModal;
