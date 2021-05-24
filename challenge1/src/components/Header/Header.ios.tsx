import React from "react";
import {
  ContainerIos,
  HeaderText,
  HeaderTextAux,
  SafeAreaViewIos,
} from "./style";

export function Header() {
  return (
    <SafeAreaViewIos>
      <ContainerIos>
        <HeaderText>to.</HeaderText>
        <HeaderTextAux>do</HeaderTextAux>
      </ContainerIos>
    </SafeAreaViewIos>
  );
}
