import { useRef } from "react";
import InputBox from "./InputBox.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-900 mb-2">
          Oops! Looks like you forgot to enter a value!
        </p>
        <p className="text-stone-900 mb-2">
          Please make sure you provide a valid value for every input.
        </p>
      </Modal>
      <div className="w-[35rem] mt-7">
        <div>
          <InputBox type="text" label="Title" ref={title}></InputBox>
          <InputBox label="Description" textArea ref={description}></InputBox>
          <InputBox type="date" label="Due Date" ref={dueDate}></InputBox>
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
};

export default NewProject;
