//shop - Layout 컴포넌트

import React, { useState , useRef } from "react";

import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";
import { TopArea } from "./TopArea";



import $ from "jquery";

window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function Layout() {
 


  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}
