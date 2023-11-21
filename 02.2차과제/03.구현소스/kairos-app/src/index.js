//Kairos - index.js (root에 출력)



import React, { useState } from "react";
import ReactDOM from "react-dom/client";


export default function App() {
  return (
   <>
   
<h2>하하하</h2>
   </>
  );
} ///////////// App 컴포넌트 ///////////////////


// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);