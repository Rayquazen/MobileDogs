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
		<View className="my-[2rem]">
			<View className="mb-[1rem]">
				<Text>{title}</Text>
			</View>
			<View className="">
				<FlatList
					data={previews}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<Link href={`/courses/${item.id}`} asChild>
							<Pressable>
								<View className="flex-1 p-[1rem] border-b-[1px solid #ddd] border-t-[1px solid #ddd] hover:border-b-[2px solid #ddd] hover:border-t-[2px solid #ddd]">
									<Text>{item.text}</Text>
								</View>
							</Pressable>
						</Link>
					)}
					horizontal
				></FlatList>
			</View>
		</View>
	);
};

export default CoursesList;
