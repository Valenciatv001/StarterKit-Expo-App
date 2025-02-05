import { Stack, Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Tabs.Screen name="(sign-in)/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
