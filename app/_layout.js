import { Link, Slot, Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about" style={{ color: "white" }}>
              <CircleInfoIcon />
            </Link>
          ),
        }}
      />
    </View>
  );
}
