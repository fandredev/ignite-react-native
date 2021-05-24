import React, { useState } from "react";
import { Image, Platform, StyleSheet } from "react-native";
import checkIcon from "../../assets/icons/Check.png";
import colors from "../../constants/colors";
import { TodoInputProps } from "./model";
import { ButtonAddNewTask, Container, Input } from "./style";

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState<string>("");

  function handleAddNewTask() {
    addTask(task);
    setTask("");
  }

  return (
    <Container
      style={[
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}
    >
      <Input
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
      />
      <ButtonAddNewTask
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </ButtonAddNewTask>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputIOSShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
});
