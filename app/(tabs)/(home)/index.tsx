import { Redirect } from "expo-router";

export default function AccountIndex() {
  // @ts-ignore
  return <Redirect href={"/(tabs)/(home)/homeDetails/"} />;
}
