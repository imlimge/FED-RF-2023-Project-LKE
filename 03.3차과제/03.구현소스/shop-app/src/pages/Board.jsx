import "../css/board.css";

export function Board() {
  return (
    <>
      <div className="board_title">
        <h2>고객센터</h2>
        <p>기분 좋은 쇼핑, 데일리라이크가 도와드릴게요</p>
      </div>
      
      <div className="board__box">
        <table className="board" id="board">

            {/* 상단 컬럼명 표시영역 */}
            <thead>
              <tr>
                <th>Num</th>
                <th>Title</th>
                <th>Writer</th>
                <th>Date</th>
                <th>Hits</th>
              </tr>
            </thead>

            {/* 중앙 레코드 표시부분 */}
            <tbody>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>게시글제목제목</td>
                <td>관리자</td>
                <td>23-12-19</td>
                <td>0</td>
            </tr>

           </tbody>

            {/* 하단 페이징 표시부분 */}
            <tfoot>
              <tr>
                <td colSpan="5" className="paging">
                    1 | 2 | 3 | 4 | 5 | 6
                </td>
              </tr>
            </tfoot>
          </table>




</div>


    </>
  );
}
