'use client'
import { updateUser } from '@/app/functions/handlerAcessAPI';
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../alterar.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function alter( {params} ) {
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
  });
  const { push } = useRouter();

  const submitEvent = async (e) => {
    e.preventDefault();
    try{
      await updateUser(user, params.id);
      await new Promise((resolve) => {
        toast.success('Usuário alterado');
        setTimeout(resolve, 5000)
      });
      return push("/pages/dashboard");
    } catch {
      return toast.console.error(("Erro"));
    }
  };
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

          <input type="text" required onChange={(e) => { setUser({ ...user, name: e.target.value }) }} placeholder='Nome'/>
         
        </div>

        <div className="input">

          <input type="email" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }} placeholder='E-mail'/>
          
        </div>

        <div className="input">

          <input type="password" requiredname="pass" id="" required onChange={(e) => { setUser({ ...user, password: e.target.value }) }} placeholder='senha'/>
          
        </div>

        <button className="enter">Alterar</button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};