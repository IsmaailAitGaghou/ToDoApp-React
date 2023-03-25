import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uudiv4 } from "uuid";
import { Todo } from "./Todo";
uudiv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      { id: uudiv4(), task: todo, completed: false, isEditing: false },
      ...todos,
    ]);

    console.log(todos);
  };

  const deleteTodo = (id) => {
    // console.log("ismail " + id);
    setTodos((prevStates) => {
      return prevStates.filter((prevState) => {
        return prevState.id !== id;
      });
    });
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className=" flex justify-center flex-col w-[50%] mx-auto">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </div>
  );
};
