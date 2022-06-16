import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter,Routes,
  Route, } from "react-router-dom";
import "./index.css";
import App from "./App";
import TableContent from "./components/Table/TableContent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/pms" element={<TableContent/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
