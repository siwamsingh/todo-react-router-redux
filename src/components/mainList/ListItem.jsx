import React from "react";
import { Link } from "react-router-dom";

export default function ListItem() {
  return (
    <div>
      <Link
        className="border border-black flex items-center w-full h-14 my-4"
        to={"edit/"}
      >
        <input type="checkbox" className=" mx-4 " />
        <div className="text-xl ">first todo</div>
      </Link>
    </div>
  );
}
