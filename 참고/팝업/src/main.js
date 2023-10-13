import { include_all_modal } from "./include.js";

include_all_modal();

const btn_open_modal = document.getElementById('open_all_modal');
btn_open_modal.addEventListener('click',()=>{
    const all_modal = document.querySelectorAll('[data-include_modal]');
    all_modal.forEach(modal=>{modal.dataset.visible = "on"});
});