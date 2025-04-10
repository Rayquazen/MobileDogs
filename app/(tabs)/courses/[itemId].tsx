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
import BASECOURSES_DATA from "@/constants/courses/BaseCoursesListData";
import { LinearGradient } from "expo-linear-gradient";
import PROCOURSES_DATA from "@/constants/courses/ProCoursesListData";
import MOVES_LIST_DATA from "@/constants/courses/MovesListData";
import GENERALCOMMANDS_LIST_DATA from "@/constants/courses/GeneralCommandsListData";

const CoursesPractice = () => {
	const { itemId, fromTab } = useLocalSearchParams();

	const [course, setCourse] = useState<CoursesPreviewData>();

	useEffect(() => {
		if (fromTab === "Base") {
			const baseCourseToStart = BASECOURSES_DATA[Number(itemId) - 1];

			// console.log(baseCourseToStart);
			if (baseCourseToStart) {
				setCourse(baseCourseToStart);
			}
		}
		if (fromTab === "Moves") {
			const movesCourseToStart = MOVES_LIST_DATA[Number(itemId) - 1];

			// console.log(baseCourseToStart);
			if (movesCourseToStart) {
				setCourse(movesCourseToStart);
			}
		}
		if (fromTab === "Commads") {
			const commandsCourseToStart =
				GENERALCOMMANDS_LIST_DATA[Number(itemId) - 1];

			// console.log(baseCourseToStart);
			if (commandsCourseToStart) {
				setCourse(commandsCourseToStart);
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
				// source={course?.image}
				resizeMode="stretch"
				className="flex-1 bg-[#8D7B68]"
			>
				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.9)"]}
					className="flex-1 justify-center items-center"
				>
					<ScrollView className="mt-[10rem]">
						<Text className="font-bold text-xl text-white text-center">
							{course?.text}
						</Text>
					</ScrollView>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default CoursesPractice;
