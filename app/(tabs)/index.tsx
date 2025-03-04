import "@/global.css";
import {
	View,
	Text,
	ImageBackground,
	SafeAreaView,
	StatusBar,
	FlatList,
	Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { DOGSMAINPAGE_DATA } from "@/constants/DogsMainPage";
// import DOGSMAINPAGEPICTURES from "@/constants/DogsMainPagePictures";

const App = () => {
	return (
		<View className="flex-1 bg-[#8D7B68]">
			{/* <ImageBackground
				// source={wallpaper}
				resizeMode="cover"
				className="flex-1 bg-[#8D7B68] "
			> */}
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="dark-content"
			/>
			<SafeAreaView className="flex-1 items-center mt-[3.5rem] justify-center">
				<View className="">
					<Text className="text-white font-bold text-3xl text-center">
						Топ пород собак
					</Text>
				</View>
				<View>
					<FlatList
						data={DOGSMAINPAGE_DATA}
						className="mb-[1rem]"
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Pressable
								onPress={() => console.log(item.title)}
								className="h-[15rem] w-[25rem] my-[1rem] rounded-md overflow-hidden"
							>
								<ImageBackground
									source={item.image}
									resizeMode="cover"
									className="flex-1 rounded-md justify-center"
								>
									<LinearGradient
										colors={["transparent", "rgba(0,0,0,0.8)"]}
										className="flex-1 justify-center items-center"
									>
										<Text className="font-bold text-xl text-white text-center">
											{item.title}
										</Text>
									</LinearGradient>
								</ImageBackground>
							</Pressable>
						)}
					></FlatList>
				</View>
			</SafeAreaView>
			{/* </ImageBackground> */}
		</View>
	);
};

export default App;
