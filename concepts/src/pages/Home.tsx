import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData<T = string> {
  id: T;
  name: T;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data: SkillData = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    if (data.name == "")
      return Alert.alert("Por favor, adicione uma tecnologia");
    setMySkills((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good morning");
    else if (currentHour >= 12 && currentHour < 18)
      setGreeting("Good afternoon");
    else if (currentHour >= 19 && currentHour <= 4) setGreeting("Good Night");
  }, [mySkills]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

{
  /*
      SafeAreaView é apenas para o IOS
      Funções que iniciam com 'handle' geralmente fazem parte do escopo de ações do usuário
    */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  greetings: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
});
