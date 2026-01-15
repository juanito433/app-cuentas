import { Stack } from "expo-router";
import { SafeAreaProvider, useSafeArea } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
        }}
      />
    </SafeAreaProvider>
  );
}
