import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toggleComplete} from "../../features/counter/todoSlice";

export default function ListItem({ todo }) {
 
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex w-full mx-2">
        <input type="checkbox" className=" mx-4 " checked={todo.completed} onChange={()=>dispatch(toggleComplete(todo.id))}/>
            <Link
              className="border border-black flex items-center w-full h-14 my-4 text-xl overflow-hidden  whitespace-nowrap px-3"
              to={"edit/"}
            >
              <span className="truncate ">{todo.text}</span>
            </Link>
      </div>
    </>
  );
}
