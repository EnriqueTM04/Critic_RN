import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "../components/Screen";

export function Main() {
  // cuando se haga llanada se tiene array vacio
  // un estado es como tener variable que cada vez que cambia de valor se vuelve a renderizar el componente
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  // se ejecuta la primera vez que se renderice el componente
  // Un efecto es algo que cada vez que cambian las dependencias o la primera vez que se renderiza se ejecuta la funcion
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        // indicador de que esta cargando la pagina
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        ></FlatList>
      )}
    </Screen>
  );
}
