import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../../features/counter/todoSlice";

export default function ListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex w-full ">
        <input
          type="checkbox"
          className=" mx-4 "
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
        />
        <Link
          className={`border-2 border-gray-900 rounded-3xl ${todo.searchedFor ? "border-red-500" : "border-black"} flex items-center w-full h-14 my-4 text-xl overflow-hidden bg-gray-700 whitespace-nowrap pr-3 pl-5`}
          to={`edit/`}
          state={{ todo }}
        >
          <span className="truncate ">{todo.text}</span>
        </Link>
      </div>
    </>
  );
}
