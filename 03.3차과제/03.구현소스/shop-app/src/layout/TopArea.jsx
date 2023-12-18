//shop - TopArea 컴포넌트

import $ from "jquery";
import { useNavigate } from 'react-router-dom';



window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TopArea() {


  
  return(
    <>
      <header id="top-area">
      
      <div className="header inbox">
        <div className="header-box">
          <div className="logo">
            <a href="#">Logo</a>
          </div>

          <nav className="gnb">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">게시판</a>
              </li>
            </ul>
          </nav>

          <div className="login-box">
           <i className="search fa-solid fa-magnifying-glass"></i>
            <i className="cart fa-solid fa-cart-shopping"></i>
           <i className="login fa-solid fa-user"></i>
          </div>
        </div>
      </div>

    </header>



    </>
  );
} //// TopArea 컴포넌트 ////
