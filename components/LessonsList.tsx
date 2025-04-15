import { View, Text, Pressable } from "react-native";
import React from "react";
import { CoursesPreviewData } from "@/constants/courses/CoursesPreviewList";
import { Link } from "expo-router";

interface CoursesListProps {
	id: number;
	text: string;
	tab: any;
}

const CoursesList = ({ id, text, tab }: CoursesListProps) => {
	return (
		<Link
			key={id}
			href={{
				pathname: "/courses/[itemId]",
				params: { itemId: id.toString(), fromTab: tab },
			}}
			asChild
		>
			<Pressable className="flex-1 h-[6rem] w-[26rem] items-center justify-center  bg-gray-300 border-2 border-gray-400 rounded-lg mb-[1rem]">
				<View className="flex-row gap-[0.5rem] ">
					<Text className="text-xl ">{id}.</Text>
					<Text className="text-xl text-center ">{text}</Text>
				</View>
			</Pressable>
		</Link>
	);
};

export default CoursesList;
