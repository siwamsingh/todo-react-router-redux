import React from "react";
import {  Link } from "react-router-dom";

export default function EditList() {
  return (
    <div className="flex bg-red-500 justify-center h-full">
      <div className="bg-yellow-600 flex flex-col w-1/2">
        <div className="flex justify-end">
          <Link className="border-2 border-black h-7 mx-4" to={`/`}>
            Back
          </Link>
          <button className="border-2 border-red-600 h-7 mx-4">Delete</button>
          <button className="border-2 border-green-600 h-7">Edit</button>
        </div>
        <textarea
          maxLength="300"
          cols="30"
          rows="10"
          readOnly={false}
          className="border h-96 border-black resize-none "
        ></textarea>
        <button className=" border-2 border-black ">Add</button>
      </div>
    </div>
  );
}
