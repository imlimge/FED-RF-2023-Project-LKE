

import "../css/search_list.css"
import { ItemList } from "../modules/ItemList"


export function SearchList() {

  return(
    <>
    <section id="search__list">
    <div className="search__list">

    <h2> 검색결과 </h2>

      <div className="search__list__count">
                 <span>00</span>
      <span>개의 상품이 있습니다.</span>
      </div>

    <ItemList/>


    </div>

</section>
    </>
  )
  }