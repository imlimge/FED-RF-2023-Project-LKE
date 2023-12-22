//shop - MainArea 컴포넌트

import { Outlet } from "react-router-dom";

import { Main } from "../pages/Main";

export function MainArea() {




  return(
    <main className="main">
      <Outlet />
    </main>
  
  );
  
  }