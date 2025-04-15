import { View, Text, ScrollView, Pressable, StatusBar } from "react-native";
import React from "react";
import COURSES_DATA from "@/constants/courses/BaseCoursesListData";
import CoursesList from "@/components/LessonsList";
import { Link } from "expo-router";

const Courses = () => {
	return (
		<View className="flex-1 items-center bg-[#8D7B68]">
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="dark-content"
			/>
			<Text className="text-3xl text-white text-center font-bold ml-[0.5rem] my-[7rem]">
				Выберите интересующий вас раздел
			</Text>
			<View className="flex-col gap-20 items-center justify-center">
				<Link
					href={{
						pathname: "/courses/BaseCourses",
						params: { fromTab: "Base" },
					}}
					asChild
				>
					<Pressable className="flex w-[25rem] h-[10rem] items-center justify-center  bg-gray-200 border-2 border-gray-400 rounded-lg">
						<Text className="text-center text-xl font-bold">Воспитание:</Text>
						<Text className="text-center text-xl font-bold">
							Необходимая база для комфортного быта
						</Text>
					</Pressable>
				</Link>
				<Link
					href={{
						pathname: "/courses/ProCoursesMain",
						params: { fromTab: "PRO" },
					}}
					asChild
				>
					<Pressable className="flex w-[25rem] h-[10rem] items-center justify-center bg-gray-200 border-2 border-gray-400 rounded-lg">
						<Text className="text-center text-xl font-bold">Дрессировка:</Text>
						<Text className="text-center text-xl font-bold">
							Продвинутый уровень для тех, кто уже освоил базу – подробные
							алгоритмы по освоению полного списка команд
						</Text>
					</Pressable>
				</Link>
			</View>
		</View>
	);
};

export default Courses;
