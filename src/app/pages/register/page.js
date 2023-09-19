'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './cadastrar.css';

export default async function register() {

  const submitEvent = (e) => {
    e.preventDefault();
    toast.success('Usuário cadastrado com sucesso')
  }
  return (
<>
<header>
        <ul class='nav-menu'>
          <li class='nav-menu-item'><a href='/'>Home</a></li>
          <li class='nav-menu-item'><a href='/pages/alter'>Alterar</a></li>
          <li class='nav-menu-item'><a href='/pages/register'>Cadastrar</a></li>
        </ul>
  </header>

    <div className="cadastrar">
      
      <h1>Cadastrar</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input">
          <input type="text" required placeholder='Nome'/>
        </div>

        <div className="input">
          <input type="email" required placeholder='E-mail'/>
        </div>

        <div className="input">
          <input type="password" required placeholder='Senha' />
        </div>

        <button className="enter">Cadastrar </button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};