import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

export default function MainList() {
  return (
    <>
    <div className="p-4 bg-yellow-500" >
      <div className="flex justify-evenly">
      <form action="#">
        <input type="search" placeholder="search" className="px-2 border-2 border-black"/>
      </form>
      <Link className=' border-2 border-black ' to={'add/'}>ADD</Link>
   </div> </div>
      <div className=" border-2 border-red-500  px-5 ">
        <ListItem />
      </div>
    </>
  );
}
