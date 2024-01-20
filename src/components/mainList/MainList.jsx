import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../../app/store";
import { search } from "../../features/counter/todoSlice";

export default function MainList() {
  const todos = useSelector((state) => state.todo.todos);
  const [searchItem, setSearchItem] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(searchItem));
  }, [searchItem]);

  return (
    <>
      <div className=" md:w-1/4 sm:w-1/3 p-2  static">
        <div className="flex justify-evenly  ">
          <input
            type="search"
            placeholder="search"
            className="px-5 border-2 border-purple-300 outline-none h-10 w-full rounded-3xl "
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>
      <div className="CustomFont1 w-full sm:w-2/3 md:w-1/2 px-6 py-3  bg-gray-900 rounded-2xl  mx-auto  ">
        <div className=" bg-gray-800 text-white  pr-3 overflow-auto h-96 ">
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <ListItem todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center relative  pt-4">
        <Link
          className=" shadow-xl hover:bg-purple-950 transition ease-in-out duration-300  p-1 rounded-full scale-150 bg-purple-700 text-white mx-auto "
          to={"add/"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
