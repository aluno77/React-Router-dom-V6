import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Users from "./routes/Users";
import About from "./routes/About";
import Layout from "./Layout";
import User from "./routes/User";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          <Route path="users" element={<Users />}>
            <Route index element={<div>Selecione um usuário</div>} />
            <Route path=":userId" element={<User />} />
          </Route>
          
          <Route path="*" element={<Navigate replace to="/" />} />
          {/*  <Route path="*" element={<h1>404 - not found</h1>}/> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
