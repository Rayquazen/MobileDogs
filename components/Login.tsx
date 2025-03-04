import {
	View,
	Text,
	ImageBackground,
	StatusBar,
	SafeAreaView,
} from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
const Login = () => {
	const router = useRouter();
	return (
		<View className="flex-1">
			<ImageBackground resizeMode="cover" className="flex-1  bg-[#EAD8C0]">
				<SafeAreaView className="flex-1 justify-between items-center py-[3rem] mx-[2rem]">
					{/* Делаем статус-бар прозрачным */}
					<View>
						<Text className="text-white text-2xl">TUMBA UMBA ALOOOO Go</Text>
					</View>

					<CustomButton
						onPress={() => router.push("/home-page")}
						title="Let's go"
					/>
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
};

export default Login;
