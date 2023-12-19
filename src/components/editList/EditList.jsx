import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editText , deleteTodo} from "../../features/counter/todoSlice";
import { useNavigate } from "react-router-dom";

export default function EditList() {
  const [isEditable, setIsEditable] = useState(false);
  const location = useLocation();
  const todo = location.state.todo;
  const [text,setText] = useState(todo.text);
  
  const dispatch = useDispatch();

  const updateText = () => {
    if (isEditable) {
      dispatch(editText({ id : todo.id, text: text }));
      setIsEditable(false);
    }else{
      setIsEditable(true);
    }
  };

  const navigate = useNavigate();
  const removeTask = () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this task?");
  
    if (userConfirmed) {
      dispatch(deleteTodo(todo.id));
      navigate(-1);
    } 
  };
  

  return (
    <div className="flex bg-red-500 justify-center h-full">
      <div className="bg-yellow-600 flex flex-col w-1/2">
        <div className="flex justify-end">
          <Link className="border-2 border-black h-7 mx-4" to={`/`}>
            Back
          </Link>
          <button className="border-2 border-red-600 h-7 mx-4" onClick={removeTask}>Delete</button>
          <button
            className="border-2 border-green-600 h-7"
            onClick={updateText}
          >
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>
        <textarea
          maxLength="220"
          cols="30"
          rows="10"
          value={text}
          readOnly={!isEditable}
          className="border h-96 border-black resize-none p-2"
          onChange={(e)=>setText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
