import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function TouristLocation({
  name,
  address,
  description,
  imageUrl,
}) {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30, color: "#add8e6" }}>{address}</Text>
      <Text style={{ fontSize: 30, color: "#a9a9a9" }}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 500,
    height: 500,
    marginBottom: 20,
  },
  text: {
    color: "blue",
    fontWeight: "bold",
    marginVertical: "10",
  },
});
