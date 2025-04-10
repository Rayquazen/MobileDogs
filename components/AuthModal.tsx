import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Switch,
	Pressable,
	TouchableOpacity,
	Alert,
} from "react-native";
import Modal from "react-native-modal";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "./auth-context";
import { registerUser, loginUser } from "@/constants/authService";

interface AuthModalProps {
	isVisible: boolean;
	// isFormDone: boolean; // true - форма завершена, false - форма не завершена,
	//  это про графу "завершенная анкета" у пользователя
	onClose: () => void;
}

const AuthModal = ({ isVisible, onClose }: AuthModalProps) => {
	///

	const { login } = useAuth(); // Достаём login из контекста

	const [isRegister, setIsRegister] = useState(false); // true - регистрация, false - логин

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((prev) => !prev);

	const [logIn, setlogIn] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleAuth = async () => {
		if (!logIn.trim() || !password.trim()) {
			Alert.alert("Ошибка", "Заполните все поля.");
			return;
		}

		if (isRegister && password !== confirmPassword) {
			Alert.alert("Ошибка", "Пароли не совпадают.");
			return;
		}

		try {
			if (isRegister) {
				await registerUser(logIn, password);
				Alert.alert(
					"Успех",
					"Регистрация прошла успешно. Теперь войдите в систему."
				);
				setIsRegister(false);
				return;
			}

			const userData = await loginUser(logIn, password);
			login(userData);
			onClose();

			// То что ниже нам на 90% не нужно будет скорее всего //

			// if (!isFormDone) {
			// 	isVisible = false;
			// 	<InfoFormModal isVisible={true} onClose={() => false} />;
			// } else {
			// 	onClose();
			// }
		} catch (error) {
			console.error("Ошибка:", error);
			Alert.alert("Ошибка", "Что-то пошло не так. Попробуйте ещё раз.");
		}
	};

	return (
		<Modal isVisible={isVisible} onBackdropPress={onClose}>
			<View className="w-5/6 bg-slate-900 rounded-2xl p-6 self-center  ">
				<Text className="text-center text-3xl text-gray-300 mb-4">
					{isRegister ? "Регистрация" : "Вход"}
				</Text>

				<TextInput
					className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
					placeholder="Логин"
					placeholderTextColor="#B0B0B0"
					value={logIn}
					onChangeText={setlogIn} // Следим за вводом
				/>

				<TextInput
					className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
					placeholder="Пароль"
					placeholderTextColor="#B0B0B0"
					secureTextEntry
					value={password}
					onChangeText={setPassword} // Следим за вводом
				/>

				{isRegister && (
					<TextInput
						className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
						placeholder="Повторите пароль"
						placeholderTextColor="#B0B0B0"
						secureTextEntry
						value={confirmPassword}
						onChangeText={setConfirmPassword} // Следим за вводом
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
						{isRegister ? "Регистрация через соцсети" : "Войти с помощью"}
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

				<View className=" flex-row h-[2rem] text-gray-400 justify-center items-center">
					<Text className="flex text-gray-400">
						{isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
					</Text>
					<Pressable onPress={() => setIsRegister(!isRegister)}>
						<Text className="text-white underline">
							{isRegister ? "Войти" : "Регистрация"}
						</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default AuthModal;
