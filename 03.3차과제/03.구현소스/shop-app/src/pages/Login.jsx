
import "../css/member.css"


export function Login() {

  return(
    <>
    <section id="login">

<div className="login__title">
        <h2>로그인</h2>
</div>

      <div className="login__box" >
        <form method="post" action="process.php">
         
              {/* 1.아이디 */}
              <label>ID : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="Please enter your ID"
            
              />
          

      
              {/* 2.비밀번호 */}
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Password"
       
              />
           

     
            {/* 3.서브밋버튼 */}
            <div style={{overflow:'hidden'}}>
              <button className="sbtn">
                Submit
              </button>
            </div>

        </form>
      </div>

    </section>
    </>
  )
  }