import { useState } from 'react'
import jpIMG from './assets/jp.svg'
import './style.css'

function App() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Bem Vindo!</span>
              <span className="login-form-title">
                <img src={jpIMG} alt="Jovem programador" />
              </span>

              <div className="wrap-input">
                <input
                type="email" 
                className={email !== "" ? 'has-val input ' : 'input'}
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                <span className='fucus-input' data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  type="password"
                  className={password !== "" ? 'has-val input ' : 'input'}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                <span className='fucus-input' data-placeholder="Password"></span>
              </div>


              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta?</span>

                <a href="#" className="txt2">Criar conta.</a>
              </div>


            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
