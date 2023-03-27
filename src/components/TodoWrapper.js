import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uudiv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoApp } from "./EditTodoApp";
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
    setTodos((prevStates) => {
      return prevStates.filter((prevState) => {
        return prevState.id !== id;
      });
    });
  };

  //   set completed to true for disable clicking again

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className=" flex justify-center flex-col w-[50%] mx-auto ">
      <h1 className=" text-black font-mono font-bold text-3xl text-center py-7 ">
        Get things done
      </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoApp editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
