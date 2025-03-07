import { View, Text, TextInput, Pressable } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";

interface InfoFormModalProps {
	isVisible: boolean;
	onClose: () => void;
}

const InfoFormModal = ({ isVisible, onClose }: InfoFormModalProps) => {
	const [name, setName] = useState("");
	const [dogName, setDogName] = useState("");
	const [dogBreed, setDogBreed] = useState("");
	const [dogAge, setDogAge] = useState("");
	return (
		<Modal isVisible={isVisible} onBackdropPress={onClose}>
			<View className="h-[45rem] w-full bg-slate-900 rounded-2xl p-6 self-center">
				<View className="flex-1 justify-center ">
					{/* Title Section */}
					<View className="mb-6 flex-col items-center justify-start">
						<Text className="text-3xl font-bold text-white mb-2">
							Давайте знакомится!
						</Text>
						<Text className="text-base text-white text-center">
							Эта информация поможет нам лучше понимать вас и вашу собаку. Вы
							можете пропустить этот шаг и заполнить анкету позже в профиле.
						</Text>
					</View>

					{/* Form Fields */}

					<Text className="text-base text-white">Как вас зовут?</Text>
					<TextInput
						className="bg-slate-900 w-full  rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
						placeholder="Ваше имя"
						placeholderTextColor="#B0B0B0"
						value={name}
						onChangeText={setName} // Следим за вводом
					/>

					<Text className="text-base text-white">Как зовут вашу собаку?</Text>
					<TextInput
						className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
						placeholder="Кличка вашей собаки"
						placeholderTextColor="#B0B0B0"
						value={dogName}
						onChangeText={setDogName} // Следим за вводом
					/>

					<Text className="text-base text-white">
						Какой породы ваша собака?
					</Text>
					<TextInput
						className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
						placeholder="Порода вашей собаки"
						placeholderTextColor="#B0B0B0"
						value={dogBreed}
						onChangeText={setDogBreed} // Следим за вводом
					/>

					<Text className="text-base text-white">
						Сколько лет вашей собаки?
					</Text>
					<TextInput
						className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mb-3 text-white"
						placeholder="Возраст вашей собаки"
						placeholderTextColor="#B0B0B0"
						value={dogAge}
						onChangeText={setDogAge} // Следим за вводом
					/>

					{/* Button Group */}
					<View className="flex-col items-center mt-[2.5rem] gap-[2.5rem]">
						<Pressable
							className="flex w-[15rem] h-[3.5rem] items-center justify-center bg-gray-300 border-2 border-gray-400 rounded-lg"
							onPress={() => console.log("Форма отправлена")}
						>
							<Text className="text-center text-xl">Сохранить</Text>
						</Pressable>
						<Pressable
							className="flex w-[10rem] h-[2.5rem] items-center justify-center bg-gray-300 border-2 border-gray-400 rounded-lg"
							onPress={onClose}
						>
							<Text className="text-center ">Пропусить</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default InfoFormModal;
