import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { CoursesPreviewData } from "@/constants/courses/CoursesPreviewList";
import { Link } from "expo-router";

interface CoursesListProps {
	title: string;
	previews: CoursesPreviewData[];
}

const CoursesList = ({ title, previews }: CoursesListProps) => {
	return (
		<View className="my-[1rem] ml-[0.5rem] ">
			<View className="mb-[1rem] ">
				<Text className="text-xl text-gray-200">{title}</Text>
			</View>
			<FlatList
				data={previews}
				nestedScrollEnabled={true}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Link
						href={{
							pathname: "/courses/[itemId]",
							params: { itemId: item.id.toString() },
						}}
						asChild
					>
						<Pressable>
							<View className="p-[0.5rem]">
								<Text className="border p-[0.5rem] text-gray-200">
									{item.text}
								</Text>
							</View>
						</Pressable>
					</Link>
				)}
				horizontal
			/>
		</View>
	);
};

export default CoursesList;
