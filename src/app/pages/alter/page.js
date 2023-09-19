'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../.css'

export default async function alter() {

  const submitEvent = (e) => {
    e.preventDefault();
    toast.success('Usuário alterado com sucesso')
  }
  return (
<>


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