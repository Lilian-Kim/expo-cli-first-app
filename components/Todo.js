import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import dayjs from "dayjs";

const Todo = props => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const onChangeText = text => {
    setTodo(text);
  };

  const onSaveTodoList = () => {
    setTodo("");
    if (!todo) {
      return alert("텍스트를 입력하세요.");
    }
    setTodoList(todoList.concat(todo));
  };

  const onRemoveTodoList = i => {
    setTodoList(todoList.filter((d, index) => index !== i));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{dayjs().format("YYYY-MM-DD")}</Text>
      </View>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          value={todo}
          onChangeText={onChangeText}
          placeholder="투두리스트를 입력하세요."
        />
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor="#fff"
          onPress={onSaveTodoList}
          style={styles.saveButton}
        >
          <Text>저장</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          ...styles.inner,
          borderTopWidth: 1,
          borderColor: "#888",
          marginTop: 20
        }}
      >
        <Text style={{ marginTop: 20, fontSize: 18 }}>LIST</Text>
      </View>
      {todoList && todoList.length ? (
        todoList.map((l, i) => (
          <View style={styles.inner}>
            <Text style={styles.item}>{l}</Text>
            <TouchableHighlight
              activeOpacity={0.3}
              underlayColor="#fff"
              style={styles.deleteButton}
              onPress={() => onRemoveTodoList(i)}
            >
              <Text>삭제</Text>
            </TouchableHighlight>
          </View>
        ))
      ) : (
        <View
          style={{
            ...styles.inner,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <Text>등록된 리스트가 없습니다.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    flex: 1,
    textAlign: "center",
    marginTop: 20
  },
  saveButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    padding: 5,
    height: 40,
    borderRadius: 5,
    backgroundColor: "powderblue",
    flex: 1
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "pink",
    flex: 1
  },
  input: {
    margin: 5,
    borderWidth: 1,
    padding: 10,
    flex: 3,
    borderColor: "#666"
  },
  item: {
    width: 250,
    padding: 10,
    flex: 3
  }
});

export default Todo;
