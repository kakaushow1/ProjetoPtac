'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../.css'

export default async function register() {

  const submitEvent = (e) => {
    e.preventDefault();
    toast.success('Usuário cadastrado com sucesso')
  }
  return (
<>


    <div className="cadastrar">
      <h1>Cadastrar</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input_box">
          <input type="text" required placeholder='Nome'/>
        </div>

        <div className="input_box">
          <input type="email" required placeholder='E-mail'/>
        </div>

        <div className="input_box">
          <input type="password" required placeholder='Senha' />
        </div>

        <button className="enter">Cadastrar </button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};