import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";

export default function PokemonCard({ stats }) {
  var typeObj;
  if (stats.type && stats.type.toString().toLowerCase() === "fire") {
    typeObj = {
      color: "red",
      emoji: "🔥",
    };
  } else if (stats.type.toString().toLowerCase() === "grass") {
    typeObj = {
      color: "green",
      emoji: "🌿",
    };
  } else if (stats.type.toString().toLowerCase() === "water") {
    typeObj = {
      color: "blue",
      emoji: "💧",
    };
  } else if (stats.type.toString().toLowerCase() === "electric") {
    typeObj = {
      color: "yellow",
      emoji: "⚡️",
    };
  }
  return (
    <View style={styles.view}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{stats.name}</Text>
        <Text style={styles.name}> ❤️HP: {stats.hp}</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={stats.image}
          resizeMode="contain"
          accessibilityLabel="asdsa "
        />
      </View>

      <Pressable onPress={() => alert(typeObj.emoji)}>
        <View style={[styles.typeContainer, { borderColor: typeObj.color }]}>
          <Text style={styles.type}>
            {typeObj.emoji}
            {stats.type}
          </Text>
        </View>
      </Pressable>
      <View>
        <Text style={styles.moves}>Moves: {stats.moves.join(", ")}</Text>
      </View>
      <View>
        <Text style={styles.weaknesses}>
          Weaknesses: {stats.weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  type: { alignSelf: "center", fontSize: 26, fontWeight: "600" },
  typeContainer: {
    borderRadius: 14,
    borderWidth: 3,
    alignSelf: "center",
    padding: 10,
  },
  moves: { fontWeight: "bold", fontSize: 20, paddingTop: 15 },
  weaknesses: { fontWeight: "bold", fontSize: 20, paddingTop: 15 },
  view: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 16,
    borderWidth: 3,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { widht: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
