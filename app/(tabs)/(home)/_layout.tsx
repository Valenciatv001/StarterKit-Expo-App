import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="homeDetails" options={{ headerShown: false }} />
      <Stack.Screen name="(other-tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
