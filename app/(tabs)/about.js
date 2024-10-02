import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView style={{ backgroundColor: "black" }}>
        <Link
          asChild
          href="/"
          style={{ color: "#60a5fa", fontSize: 20, marginTop: 96 }}
        >
          <TouchableOpacity>
            <Feather name="home" size={24} color="white" />
          </TouchableOpacity>
        </Link>

        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Sobre el proyecto
        </Text>

        <Text style={{ color: "white", marginBottom: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>

        <Text style={{ color: "white", marginBottom: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>

        <Text style={{ color: "white", marginBottom: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>

        <Text style={{ color: "white", marginBottom: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </ScrollView>
    </Screen>
  );
}
