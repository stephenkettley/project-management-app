import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleClick() {
    if (enteredTask.trim().length > 0) {
      onAdd(enteredTask);
      setEnteredTask("");
    }
  }

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 outline-none"
        value={enteredTask}
        type="text"
      />
      <button
        onClick={handleClick}
        className="text-stone-600 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
