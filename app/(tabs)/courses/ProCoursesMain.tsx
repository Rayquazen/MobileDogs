import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import CoursesList from "@/components/LessonsList";
import PROCOURSES_DATA from "@/constants/courses/ProCoursesListData";
import { Link, useLocalSearchParams } from "expo-router";

const ProCourses = () => {
	const { fromTab } = useLocalSearchParams();
	return (
		<View className="flex-1 items-center bg-[#8D7B68]">
			<Text className="text-3xl text-white text-center font-bold ml-[0.5rem] my-[7rem]">
				Выберите интересующий вас раздел
			</Text>
			<View className="flex-col gap-20 items-center justify-center">
				<Link
					href={{
						pathname: "/courses/GeneralCommads",
						params: { fromTab: "Commads" },
					}}
					asChild
				>
					<Pressable className="flex w-[25rem] h-[10rem] items-center justify-center  bg-gray-200 border-2 border-gray-400 rounded-lg">
						<Text className="text-center text-xl font-bold">
							Команды общего курса
						</Text>
					</Pressable>
				</Link>
				<Link
					href={{
						pathname: "/courses/Moves",
						params: { fromTab: "Moves" },
					}}
					asChild
				>
					<Pressable className="flex w-[25rem] h-[10rem] items-center justify-center bg-gray-200 border-2 border-gray-400 rounded-lg">
						<Text className="text-center text-xl font-bold">Трюки</Text>
					</Pressable>
				</Link>
			</View>
		</View>
	);
};

export default ProCourses;
