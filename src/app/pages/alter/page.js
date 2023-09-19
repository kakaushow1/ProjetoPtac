'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './alterar.css';


export default async function alter() {

  const submitEvent = (e) => {
    e.preventDefault();
    toast.success('Usuário alterado com sucesso')
  }
  return (
<>
<div className="menu">
  <ul className="nav-menu">
    <li className="nav-menu-item"><a href='/'>Home</a></li>
    <li className="nav-menu-item"><a href='/pages/alter'>Alterar</a></li>
    <li className="nav-menu-item"><a href='/pages/register'>Cadastrar</a></li>
  </ul>
</div>

    <div className="alterar">
      <h1>Alterar</h1>
      

      <form action="" onSubmit={submitEvent}>
        <div className="input">

          <input type="text" required placeholder='Nome'/>
         
        </div>

        <div className="input">

          <input type="email" required placeholder='E-mail'/>
          
        </div>

        <div className="input">

          <input type="password" required placeholder='senha'/>
          
        </div>

        <button className="enter">Alterar</button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};