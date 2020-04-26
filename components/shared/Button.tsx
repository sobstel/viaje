import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type Props = { title: string; onPress: any };

export function Button({ title, onPress }: Props) {
  const containerStyle: ViewStyle[] = [styles.container];
  if (title === "") {
    containerStyle.push(styles.emptyContainer);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={containerStyle}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: 56,
    height: 56,
    backgroundColor: "rgba(10, 10, 10, 0.7)",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    backgroundColor: "rgba(50, 50, 50, 0.97)",
  },
  title: {
    color: "#eee",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Avenir-Book",
  },
});
