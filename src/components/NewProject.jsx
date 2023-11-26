import InputBox from "./InputBox.jsx";

const NewProject = () => {
    return <div className="w-[35rem] mt-16">
        <div>
           <InputBox label="Title"></InputBox>
           <InputBox label="Description" textArea></InputBox>
           <InputBox label="Due Date"></InputBox>
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
    </div>
}

export default NewProject;