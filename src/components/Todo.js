import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="bg-lime-900 p-6 px-11 rounded-2xl flex mt-2 justify-between text-white">
      <p
        className={
          task.completed
            ? `text-lg w-10/12 line-through text-slate-500`
            : `text-lg w-10/12 cursor-pointer`
        }
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenSquare}
          className=" text-xl mr-5 cursor-pointer"
          title="Edit this Note"
          onClick={() => !task.completed && editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className=" text-xl cursor-pointer"
          title="Delete this Note"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
