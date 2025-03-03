import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COURSES_DATA } from "@/constants/CoursesListData";
import CoursesList from "@/components/CoursesList";

const Courses = () => {
	return (
		<View className="flex-1 justify-center items-center bg-[#8D7B68]">
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text className="text-3xl text-white text-left font-bold">
					Каталог наши курсов для вас и ваших животных
				</Text>
				<View className="">
					{COURSES_DATA.map((e: { title: string; data: any[] }) => (
						<CoursesList
							key={e.title}
							title={e.title}
							previews={e.data}
						></CoursesList>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default Courses;
