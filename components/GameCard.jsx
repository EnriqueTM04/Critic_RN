import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

const limitWords = (text, wordCount) => {
  const words = text.split(" ");
  if (words.length <= wordCount) {
    return text; // Si el número de palabras es menor o igual al límite, devuelve el texto original
  }
  return words.slice(0, wordCount).join(" ") + "..."; // Devuelve las primeras 'wordCount' palabras seguidas de '...'
};

export function GameCard({ game }) {
  const wordLimit = 20; // Establece el límite de palabras

  return (
    <Link href={`/${game.slug}`} asChild>
      <TouchableOpacity style={styles.pressable}>
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description}>
              {limitWords(game.description, wordLimit)}{" "}
              {/* Limita el texto a 20 palabras */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

// Se animara uno por uno
export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // flex-row
    backgroundColor: "rgba(200, 200, 200, 0.1)", // bg-slate-500/10
    padding: 16, // p-4
    borderRadius: 16, // rounded-xl
    gap: 16, // gap-4 (si es aplicable)
    paddingBottom: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  image: {
    width: 97,
    height: 137,
    borderRadius: 10,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 15,
    maxWidth: 250,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "left",
  },
  description: {
    fontSize: 13,
    maxWidth: 250,
    color: "#eee",
    textAlign: "left",
  },
  pressable: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 8, // mb-2 en Tailwind
  },
});
