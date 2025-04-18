import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoursesList from "@/components/LessonsList";
import GENERALCOMMANDS_LIST_DATA from "@/constants/courses/GeneralCommandsListData";
import { useLocalSearchParams } from "expo-router";

const GeneralCommads = () => {
	const { fromTab } = useLocalSearchParams();
	return (
		<View className="flex-1 items-center justify-center bg-[#8D7B68]">
			<Text className="text-3xl text-white text-center font-bold my-[3rem]">
				Каталог наши курсов для продвинутых хозяинов:{"\n"}
				{"\n"}Команды общего курса
			</Text>

			<ScrollView
				showsVerticalScrollIndicator={false}
				// className="mb-[1rem]"
				// contentContainerStyle={{ flexGrow: 1 }}
			>
				<View className="flex-1 gap-[2rem] ">
					{GENERALCOMMANDS_LIST_DATA.map((e) => (
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

export default GeneralCommads;
