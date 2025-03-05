import { Slot, Stack } from "expo-router";
import { AuthProvider } from "@/components/auth-context";

export default function RootLayout() {
	return (
		<AuthProvider>
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{ headerShown: false }}
				></Stack.Screen>
			</Stack>
		</AuthProvider>
	);
}
