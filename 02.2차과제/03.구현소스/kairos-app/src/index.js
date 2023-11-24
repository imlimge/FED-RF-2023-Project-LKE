//Kairos - index.js (root에 출력)


import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Layout } from "./layout/Layout";


//인덱스 CSS 불러오기
import './css/index.css'


export default function App() {
  return (
   <>
    <Layout />
   </>
  );
} ///////////// App 컴포넌트 ///////////////////


// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />); 
