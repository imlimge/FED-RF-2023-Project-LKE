import "../css/member.css";

export function Login() {
  return (
    <>
      <section id="login">
        <div className="login__title">
          <h2>로그인</h2>
        </div>

        <div className="login__box">

            <div className="form__box">
              {/* 1.아이디 */}
              <label>아이디</label>
              <input type="text" maxLength="20" />
            </div>

            <div className="form__box">
              {/* 2.비밀번호 */}
              <label>패스워드</label>
              <input type="password" maxLength="20" />
            </div>

            <div className="security">
              <ul>
                <li>
                  <label htmlFor="chk_save_id">
                    <input
                      type="checkbox"
                      name="save_id"
                      id="chk_save_id"
                      value="on"
                    />
                    아이디 저장
                  </label>
                </li>
                <li>
                  <label htmlFor="save_id">
                    <input
                      type="checkbox"
                      name="ssl"
                      value="Y"
                      className="security_checkbox"
                      defaultChecked="checked"
                    />
                    보안접속
                  </label>
                </li>
                <li>비밀번호/아이디찾기</li>
              </ul>
            </div>

            {/* 3.서브밋버튼 */}
            <div>
              <button className="login__btn">로그인</button>
            </div>
  

  
        </div>
      </section>
    </>
  );
}
