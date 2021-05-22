import React, { useState } from "react";
import { Alert } from "react-native";
import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task<T = number, U = string, V = boolean> {
  id: T;
  title: U;
  done: V;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask: Readonly<Task> = {
      id: generateIdRandomic(),
      title: newTaskTitle,
      done: false,
    };
    if (newTask.title.length === 0)
      return Alert.alert("Uma task vazia não pôde ser adicionada =(");

    setTasks((oldState) => [...oldState, newTask]);
  }

  function generateIdRandomic() {
    return new Date().getTime();
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTask);
  }

  function handleRemoveTask(id: number) {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
