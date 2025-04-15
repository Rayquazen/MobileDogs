import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import CoursesList from "@/components/LessonsList";
import BASECOURSES_DATA from "@/constants/courses/BaseCoursesListData";
import { Link, useLocalSearchParams } from "expo-router";

const BaseCourses = () => {
	const { fromTab } = useLocalSearchParams();
	return (
		<View className="flex-1 items-center justify-center bg-[#8D7B68]">
			<Text className="text-3xl text-white text-center font-bold mt-[3rem] mb-[1rem]">
				Каталог наши уроков для начинающих хозяинов
			</Text>

			<ScrollView
				showsVerticalScrollIndicator={false}
				// className="mb-[1rem]"
				// contentContainerStyle={{ flexGrow: 1 }}
			>
				<View className="flex-1 gap-[2rem] ">
					{BASECOURSES_DATA.map((e) => (
						<CoursesList
							key={e.id}
							id={e.id}
							text={e.text}
							tab={fromTab}
						></CoursesList>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default BaseCourses;
