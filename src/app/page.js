'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './logins.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
  const userAuth =await handlerAcessUser(user);
  if(userAuth.token === undefined){
    toast.error("Email ou senha digitado errado");
  }
  push('/pages/dashboard')
    } catch {
      toast.error("erro na aplicação")
    }
  }
  return (
    <div  >
      <div className="login">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <div className="input">
        <input type="email" placeholder="E-mail" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
       
        </div>

        <div className="input">
        <input type='password' placeholder="Senha" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/>
        </div>
        
        <button className="enter"> Entrar </button>
      </form>
      <ToastContainer />
      </div>
      

    </div>
  )
}