import { make_drag, set_close_modal } from "./move_modal.js";

export async function include_all_modal(){
    const include_modal = document.querySelectorAll('[data-include_modal]');
    for(let dom of include_modal){
        const data = await fetch_html(dom);
        dom.innerHTML = data;
        //움직이게
        make_drag(dom);
        //닫을 수 있게
        set_close_modal(dom);
    }
}//include_all_modal

function fetch_html(dom){
    const modal_id = dom.dataset.include_modal;
    const url = `./modal/${modal_id}.html`;
    return fetch(url).then(res => res.text());
}//fetch_html