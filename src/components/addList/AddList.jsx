// eslint-disable-next-line no-unused-vars
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
    <div className="flex bg-black  justify-center h-full">
      <div className=" bg-black  flex flex-col w-1/2 ">
        <span className="CustomFont1 shadow-xl hover:bg-purple-950 transition ease-in-out duration-300 bg-purple-700    rounded-full px-[2.2rem] py-2 my-2 m-auto text-gray-200 font-bold text-lg sm:text-2xl text-center w-fit"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
        <Link  to={"/"}>
          X
        </Link>
        </span> 
        <textarea
          maxLength="900"
          cols="30"
          rows="10"
          className="CustomFont1 text-white text-xl sm:text-3xl  border-y-[15px] border-x-[20px] border-gray-900 bg-gray-800 h-96
            rounded-xl resize-none p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus="autofocus"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        ></textarea>
       
        <button className=" shadow-xl hover:bg-purple-950 transition ease-in-out duration-300
             p-1 px-[1.77rem] sm:px-[2.2rem]  rounded-full scale-150 bg-purple-700
            text-gray-200  mx-auto mt-6 mb-2 text-lg sm:text-2xl  font-semibold"
             onClick={addTask}>
          <span className="CustomFont1 addWords"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Add
          </span>
        </button>
      </div>
    </div>
  );
}
