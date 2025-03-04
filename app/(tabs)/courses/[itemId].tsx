import {
	View,
	Text,
	ImageBackground,
	StatusBar,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { CoursesPreviewData } from "@/constants/courses/CoursesPreviewList";
import COURSES_DATA from "@/constants/CoursesListData";
import { LinearGradient } from "expo-linear-gradient";

const CoursesPractice = () => {
	const { itemId } = useLocalSearchParams();

	const [course, setCourse] = useState<CoursesPreviewData>();

	useEffect(() => {
		for (let idx = 0; idx < COURSES_DATA.length; idx++) {
			const courseData = COURSES_DATA[idx].data;

			const courseToStart = courseData.find((e) => e.id === Number(itemId));

			if (courseToStart) {
				setCourse(courseToStart);
				return;
			}
		}
	}, []);
	return (
		<View className="flex-1">
			<StatusBar
				// translucent
				backgroundColor="transparent"
				barStyle="default"
			/>
			<ImageBackground
				source={course?.image}
				resizeMode="stretch"
				className="flex-1"
			>
				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.9)"]}
					className="flex-1 justify-center items-center"
				>
					<ScrollView className="mt-[10rem]">
						<Text className="font-bold text-xl text-white text-center">
							Это страничка с индексом данных = {course?.text}
						</Text>
					</ScrollView>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default CoursesPractice;
