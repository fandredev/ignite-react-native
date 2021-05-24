import React, { useState } from "react";
import { Switch } from "react-native";
import { Container, HeaderText, HeaderTextAux } from "./style";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChangeMode() {
    setIsDarkMode((previousState) => !previousState);
  }
  return (
    <Container>
      <HeaderText>to.</HeaderText>
      <HeaderTextAux>do</HeaderTextAux>
      <Switch
        onValueChange={handleChangeMode}
        value={isDarkMode}
        ios_backgroundColor="#3e3e3e"
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
      />
    </Container>
  );
}
