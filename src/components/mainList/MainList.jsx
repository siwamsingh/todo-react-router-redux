import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../../app/store"

export default function MainList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <div className="p-4 bg-yellow-500">
        <div className="flex justify-evenly">
          <form action="#">
            <input
              type="search"
              placeholder="search"
              className="px-2 border-2 border-black"
            />
          </form>
          <Link className=" border-2 border-black " to={"add/"}>
            ADD
          </Link>
        </div>{" "}
      </div>
      <div className=" border-2 border-red-500  px-5 ">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <ListItem todo={todo} />
            </div>
          );
        })}
      </div>
    </>
  );
}
