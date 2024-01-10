//Kairos - index.js (root에 출력)

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Route, Routes, useOutletContext } from "react-router-dom";

//인덱스 CSS 불러오기
import "./css/index.css";

import { Layout } from "./layout/Layout";
import { Main } from "./pages/Main";
import { Board } from "./pages/Board";
import { Shop } from "./modules/Shop";

import { Living } from "./pages/Living";
import { Office } from "./pages/Office";
import { Kids } from "./pages/Kids";

import { Login } from "./pages/Login";
import { Member } from "./pages/Member";
import { Cart } from "./pages/Cart";
import { SearchList } from "./pages/SearchList";
import { ItemDetail } from "./pages/ItemDetail";

export default function App() {



  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
    
          <Route path="living" element={<Living />} />
          <Route path="office" element={<Office />} />
          <Route path="kids" element={<Kids />} />
          <Route path="itemdetail" element={<ItemDetail />} />

          <Route path="board" element={<Board />} />
          <Route path="login" element={<Login />} />
          <Route path="member" element={<Member />} />
          <Route path="cart" element={<Cart />} />
          <Route path="searchlist" element={<SearchList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} ///////////// App 컴포넌트 ///////////////////

// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
