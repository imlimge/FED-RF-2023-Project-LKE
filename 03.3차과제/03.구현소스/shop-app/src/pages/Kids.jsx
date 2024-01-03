
import { useContext } from "react";
import "../css/item_list.css";
import "../css/sell.css";


import { Shop } from "../modules/Shop";
import { sCon } from "../modules/shopContext";

export function Kids() {


  return (
    <>
    <Shop cat="키즈" />
    </>
  );
}
