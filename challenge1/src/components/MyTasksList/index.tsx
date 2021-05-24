import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../constants/colors";
import { MyTasksListProps } from "./model";
import { TextHeader } from "./style";

function FlatListHeaderComponent() {
  return (
    <View>
      <TextHeader>Minhas tasks</TextHeader>
    </View>
  );
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[item.done ? styles.taskButtonDone : styles.taskButton]}
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              style={[item.done ? styles.taskMarkerDone : styles.taskMarker]}
              //TODO - use style prop
            />
            <Text
              style={[item.done ? styles.taskTextDone : styles.taskText]}
              //TODO - use style prop
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: 10,
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    marginRight: 10,
  },
  taskText: {
    color: colors.gray,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
});
