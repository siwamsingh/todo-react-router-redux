import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import store from "./app/store";
import { Provider } from "react-redux";

import Layout from "./routes/Layout.jsx";
import MainList from './components/mainList/MainList'
import AddList from './components/addList/AddList'
import EditList from './components/editList/EditList'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainList />,
      },
      {
        path: "add/",
        element: <AddList />,
      },
      {
        path: "edit/",
        element: <EditList />,
      },
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
