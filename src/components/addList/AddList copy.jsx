import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addTodo } from "../../features/counter/todoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
    navigate(-1);
  };
  return (
    <div className="flex bg-red-500 justify-center h-full">
      <div className="bg-yellow-600 flex flex-col w-1/2">
        <Link className=" border-4 border-blue-900" to={"/"}>
          X
        </Link>
        <textarea
          maxLength="300"
          cols="30"
          rows="10"
          className="border h-96 border-black resize-none p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus="autofocus"
        ></textarea>
        <button className=" border-2 border-black " onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
}
