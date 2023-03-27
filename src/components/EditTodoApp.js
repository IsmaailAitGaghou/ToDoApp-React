import React, { useState } from "react";

export const EditTodoApp = ({ task, editTodo }) => {
  const [notes, setNotes] = useState(task.task);

  function handleSubmit(event) {
    event.preventDefault();

    editTodo(notes, task.id);
    setNotes("");
  }

  return (
    <form
      className=" bg-lime-900 p-10 rounded-2xl flex mt-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
        placeholder="Update the task"
        className=" bg-transparent outline-none border-2 py-1 px-2 w-[100%] border-spacing-1 border-lime-500 text-white"
      />
      <button
        type="submit"
        className=" bg-lime-500 py-1 border-2 border-lime-500 px-7"
      >
        Update Task
      </button>
    </form>
  );
};
