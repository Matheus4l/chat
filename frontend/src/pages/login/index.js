import React,{useState,useEffect} from 'react';
import {useHistory,Redirect} from 'react-router-dom'


import './styles.css';

export default function Login() {

  const [name,setName]=useState('')
  const history=useHistory()
  const user = localStorage.getItem('user-name');

  useEffect ( ()=>{
   
    if(user){
       
        return( <Redirect to="/home" />)
        // history.push('/home')       
    }
  },[])

   async function handleLogin() {

      try {
        
          localStorage.setItem('user-name',name)
          history.push('/home/')
      } catch (error) {
         alert('Houve um erro tente mais tarde')
      }
  }
  return (
    <div className="conteiner-login">
      <section className="form">
       
       <form onSubmit={handleLogin}>
          <h1 >Faça sua indetificação </h1>
          
          <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Seu Nickname"/>
         
          <button className="button"  type='submit'>Entrar</button>

          
       </form>

      </section>
    </div>
  );
}
