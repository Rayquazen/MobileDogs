import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { course } from "@/constants/types";

interface LessonsListProps {
	id: number;
	name: string;
}

const ProfileLessonsList = ({ id, name, description, amount }: course) => {
	return (
		<Link
			key={id}
			className="flex-1 items-center "
			href={{
				pathname: "/courses/[itemId]",
				params: { itemId: id.toString(), fromTab: "Profile" },
			}}
			asChild
		>
			<Pressable className="flex-1 h-[10rem] w-[26rem] items-center justify-center  bg-gray-300 border-2 border-gray-400 rounded-lg mb-[1rem]">
				<View className="flex-col gap-[0.5rem] items-center justify-center ">
					<Text className="text-sm text-center ">{name}</Text>
					<Text className="text-sm text-center ">{description}</Text>
					<Text className="text-sm text-center ">{amount}</Text>
				</View>
			</Pressable>
		</Link>
	);
};

export default ProfileLessonsList;
