/* ⚡ 모달 Draggble 관련*/
let is_drag_able = false;
let size_win = return_window_size();
let nowX,nowY;
const GAP = -30;

/* 🎈🎈🎈🎈 window size */
function return_window_size(){
    return {
        wid : window.innerWidth,
        hei : window.innerHeight
    };
}//return_window_size

export function update_window_size(){ size_win = return_window_size(); }

/* 🎈🎈🎈🎈 DRAG */
export function make_drag(dom){
    const this_modal = dom.getElementsByClassName('modal')[0];
    const dragHead = this_modal.getElementsByClassName('modal__head')[0];

    dragHead.addEventListener('mousedown',(e)=>{start_drag(e,this_modal)});
    dragHead.addEventListener('mousemove',(e)=>{on_drag(e,this_modal)});
    this_modal.addEventListener('mouseup',()=>{stop_drag(this_modal)});
    this_modal.addEventListener('mouseleave',()=>{stop_drag(this_modal)});
}//make_drag

/* 클릭시 - 드래그 시작할 준비를 한다. */
function start_drag(e,modal){
    is_drag_able = true;
    modal.dataset.x = e.clientX - modal.getBoundingClientRect().left;
    modal.dataset.y = e.clientY - modal.getBoundingClientRect().top; 
}//start_drag

/* 마우스가 떠나거나 클릭 종료시 - 드래그 종료 */
export function stop_drag(modal){
    clear_selection();
    is_drag_able = false;
    if(modal){
        modal.dataset.x = modal.getBoundingClientRect().left;
        modal.dataset.y = modal.getBoundingClientRect().top; 
    }
}//stop_drag

/* 클릭한 채로 마우스 이동시 - 드래그 진행 */
function on_drag(e,modal){
    if(!is_drag_able){return;}
    const size_modal = {
        wid : modal.getBoundingClientRect().width,
        hei : modal.getBoundingClientRect().height
    };

    const max_movement = {
        left : size_win.wid - size_modal.wid,
        top : size_win.hei - size_modal.hei
    };
    
    const posX = e.clientX - modal.dataset.x;
    const posY = e.clientY - modal.dataset.y;

    if(posX <= 0){
        nowX = 0;
    }else if(posX > max_movement.left){
        nowX = max_movement.left;
    }else{
        nowX = posX;}

    if(posY <= GAP){
        nowY = GAP;
    }else if(posY > max_movement.top){
        nowY = max_movement.top;
    }else{
        nowY = posY;}

    modal.style.transform = `translate(${nowX}px, ${nowY}px)`;
}//on_drag

/* CLEAR SELECTION */
export function clear_selection(){
    window.getSelection().removeAllRanges();
    //https://w3c.github.io/selection-api
}//clear_selection

/* CLOSE MODAL */
export function set_close_modal(dom){
    const btn_close_modal = dom.getElementsByClassName('btn_close_modal')[0];
    btn_close_modal.addEventListener('click',()=>{
        dom.dataset.visible="off";
    });
}//set_close_modal