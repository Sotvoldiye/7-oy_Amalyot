import { NavLink } from "react-router-dom"
import style from "./_login.module.scss"

function Login() {
  return (
    <div className={style.Login}>
<div className={style.Login_Left}>
<div className={style.Login_Description}>
        <img src="./images/logo-large.svg" alt="" />
      </div>
      <div className={style.Login_Description_text}>
        <h2 className={style.text_title}> 
        Keep track of your money
        and save for your future
        </h2>
        <p className={style.text_description}>
        Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
  </div>        
    <div>
      <div>Login</div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input name="email" type="text" />
        <label htmlFor="Password">
          Password
        </label>
        <input type="password" />
        <button className={style.formInput}>Login</button>
      </form>
      <p className={style.link}>Need to create an account? <NavLink to="/register">Sign Up</NavLink></p>
    </div>
    </div>
  )
}

export default Login