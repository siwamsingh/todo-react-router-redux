import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editText } from "../../features/counter/todoSlice";

export default function EditList() {
  const [isEditable, setIsEditable] = useState(false);
  const location = useLocation();
  const todo = location.state.todo;

  const [text,setText] = useState(todo.text);
  const dispatch = useDispatch();
  const editText = (e) => {
    if (isEditable) {
      dispatch(editText({ id : todo.id, text: todo.text }));
      setIsEditable(false);
    }else{
      setIsEditable(true);
    }
  };

  return (
    <div className="flex bg-red-500 justify-center h-full">
      <div className="bg-yellow-600 flex flex-col w-1/2">
        <div className="flex justify-end">
          <Link className="border-2 border-black h-7 mx-4" to={`/`}>
            Back
          </Link>
          <button className="border-2 border-red-600 h-7 mx-4">Delete</button>
          <button
            className="border-2 border-green-600 h-7"
            onClick={() => setIsEditable((p) => !p)}
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
          onChange={(e)=>{editText(e)}}
        ></textarea>
      </div>
    </div>
  );
}
