import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from "./components/Main.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Main />
        </View>
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    maxWidth: "95%",
  },
});
