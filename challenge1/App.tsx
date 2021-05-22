import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
