//shop - TopArea 컴포넌트

// 폰트어썸 불러오기
import {
  faCartShopping,
  faMagnifyingGlass,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TopArea() {
  return (
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
              <div className="searchingGnb">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="schbtnBtb"
                  title="Open search"
                />
                <input
                  id="schinGnb"
                  type="text"
                  placeholder="Filter by Keyword"
                />
              </div>

              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} //// TopArea 컴포넌트 ////
