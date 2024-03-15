import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../Header.jsx";
import Blogs from "../Blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Blogs />
  </React.StrictMode>
);
