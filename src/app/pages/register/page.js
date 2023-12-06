'use client'
import {postUser} from '@/app/functions/handlerAcessAPI';
import {useRouter} from 'next/navigation';
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './cadastrar.css';
import { useState } from 'react';


export default function register() {

  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
  });
  const { push } = useRouter();

  const submitEvent = async (e) => {
    e.preventDefault();
    try{
      await postUser(user);
      await new Promise((resolve) =>{
        toast.success('Usuário cadastrado');
        setTimeout(resolve, 5000)

      })
      return push("/pages/dashboard");

    } catch {
      return toast.console.error(("Erro"));
    }
    
  }
  return (
<>
<header>
        <ul class='nav-menu'>
          <li className='nav-menu-item'><a href='/'>Home</a></li>
          <li className='nav-menu-item'><a href='/pages/alter'>Alterar</a></li>
          <li className='nav-menu-item'><a href='/pages/register'>Cadastrar</a></li>
        </ul>
  </header>

    <div className="cadastrar">
      
      <h1>Cadastrar</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input">
          <input type="name" required onChange={(e) => {setUser({...user, name: e.target.value}) }}/>
          <label>Nome</label>
        </div>

        <div className="input">
          <input type="email" required onChange={(e) => {setUser({...user, email: e.target.value}) }}/>
          <label>E-mail</label>
        </div>

        <div className="input">
          <input type="password" required onChange={(e) => {setUser({...user, password: e.target.value}) }} />
          <label>password</label>
        </div>

        <button className="enter">Cadastrar </button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};