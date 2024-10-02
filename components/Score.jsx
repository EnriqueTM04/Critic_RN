import { View, Text, StyleSheet } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;

    // Retorna un objeto de estilo válido para React Native
    if (percentage < 97) return { backgroundColor: "red" };
    if (percentage < 98) return { backgroundColor: "#e5be01" };

    // Si la puntuación es 98% o más, mantenemos el color por defecto
    return { backgroundColor: "green" };
  };

  // Combina el estilo estático con el dinámico
  return (
    <View style={[getColors(), styles.score]}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    width: 32,
    fontSize: 17,
    marginBottom: 5,
    display: "block",
    textAlign: "left",
    borderRadius: 30,
    padding: 3,
    paddingHorizontal: 8,
  },
});
