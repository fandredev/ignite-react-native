import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: fonts.bold }]}>do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.regular,
  },
});
