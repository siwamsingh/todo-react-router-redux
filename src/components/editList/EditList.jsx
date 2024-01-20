import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editText , deleteTodo} from "../../features/counter/todoSlice";
import { useNavigate } from "react-router-dom";

export default function EditList() {
  const [isEditable, setIsEditable] = useState(false);
  const location = useLocation();
  const todo = location.state.todo;
  const [text,setText] = useState(todo.text);
  
  const dispatch = useDispatch();

  const updateText = () => {
    if (isEditable) {
      dispatch(editText({ id : todo.id, text: text }));
      setIsEditable(false);
    }else{
      setIsEditable(true);
    }
  };

  const navigate = useNavigate();
  const removeTask = () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this task?");
  
    if (userConfirmed) {
      dispatch(deleteTodo(todo.id));
      navigate(-1);
    } 
  };
  

  return (
    
    <div className="relative flex justify-center h-full">
      <div className="  flex flex-col w-1/2 

          text-[8px] xs:text-[12px] sm:text-base lg:text-xl">
        <div className="CustomFont1 text-gray-100 text-bold flex justify-between">
          <Link   className=" shadow-xl hover:bg-purple-950 transition ease-in-out duration-300 bg-purple-700    rounded-full

            py-2 xxs:py-[.2rem] xs:py-[.5rem] sm:py-[.6rem] md:py-[.7rem] lg:py-[.6rem] 
            px-[.35rem] xxs:px-[1rem] xs:px-[.8rem] sm:px-[.9rem] md:px-[1.2rem] lg:px-[1.4rem] 
            my-2 m-auto text-gray-200 font-bold  text-center w-fit"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} to={`/`}>
            Back
          </Link>
         <button className="CustomFont1 shadow-xl hover:bg-purple-950 transition ease-in-out duration-300 bg-purple-700    rounded-full
            py-2 xxs:py-[.2rem] xs:py-[.5rem] sm:py-[.6rem] md:py-[.7rem] lg:py-[.6rem] 
            px-[.35rem] xxs:px-[1rem] xs:px-[.8rem] sm:px-[.9rem] md:px-[1.2rem] lg:px-[1.4rem]
           my-2 m-auto text-gray-200 font-bold  text-center w-fit"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} onClick={removeTask}>
          Delete
         </button>


         <button className="CustomFont1 shadow-xl hover:bg-purple-950 transition ease-in-out duration-300 bg-purple-700    rounded-full
          py-2 xxs:py-[.2rem] xs:py-[.5rem] sm:py-[.6rem] md:py-[.7rem] lg:py-[.6rem] 
          px-[.35rem] xxs:px-[1rem] xs:px-[.8rem] sm:px-[.9rem] md:px-[1.2rem] lg:px-[1.4rem]
          my-2 m-auto text-gray-200 font-bold  text-center w-fit"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            onClick={updateText}>
            {isEditable ? "Save" : "Edit"}
         </button>
          
        </div>
        <textarea
          maxLength="300"
          cols="30"
          rows="10"
          value={text}
          readOnly={!isEditable}
          className="CustomFont1 border-y-[15px] border-x-[20px] border-gray-900 rounded-2xl bg-gray-800 h-96 resize-none p-2
          text-white text-xl sm:text-3xl"
          onChange={(e)=>setText(e.target.value)}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        ></textarea>
      </div>
    </div>
  );
}
