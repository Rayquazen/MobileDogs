import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
interface Props {
	onPress: () => void;
	title: string;
	textStyle?: string;
	containerStyle?: string;
}

const CustomButton = ({
	onPress,
	title,
	textStyle = "",
	containerStyle = "",
}: Props) => {
	return (
		<View className={`w-full px-4 ${containerStyle}`}>
			<TouchableOpacity
				activeOpacity={0.7}
				className="bg-black justify-center rounded-lg items-center py-[1.5rem]"
				onPress={onPress}
			>
				<Text className={`text- text-red-500 font-semibold ${textStyle}`}>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CustomButton;
