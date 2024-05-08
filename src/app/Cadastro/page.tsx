"use client";

import InputLabel from "@/components/InputLabel";
import { Botao } from "@/components/Botao";
import {useState} from "react";
import { create } from "@/app/actions/create";
import { v4 as uuidv4 } from 'uuid';


export default function Cadastro() {
  const [id, setId] = useState(""); 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

    async function handleClick() {
      const newId = uuidv4(); // Gera um novo ID único
      setId(newId); // Atualiza o estado do id com o novo ID gerado
      const data = {
        id: newId, // Use o novo ID gerado
        email,
        senha
      };

      setTimeout(() => {
        alert("Requisição de cadastro feita com sucesso!");
      }, 1000);

    const response = await create(data);

    if (response) {
      alert("cadastrado")
    }
    console.log("Dados do cadastro:", data);
      };

  return ( 
    
    <main className="flex min-h-screen flex-col">

      <div className="flex flex-1">

        <div className='flex ml-80 flex-col text-center my-4 justify-center' style={{ fontFamily: "Prata, serif" }}>
          <div className='p-8'>
            <h3 style={{ fontSize: "1.80rem"}}>Seja bem-vinda(o)!</h3>
            <h1 style={{ fontSize: "3.80rem" }}>Spoiled Girls Club</h1>
            <img src='/assets/line3.svg' alt='line3' />
          </div>
          <div  className='p-8'>
          <h4 style={{ fontSize: "2.80rem" }}>Cadastre-se</h4>
          <div className="flex space-x-6 items-center justify-center my-4">
            <img src='/assets/Group 1.svg' alt='google' />
            <img src='/assets/Group 2.svg' alt='facebook' />
          </div>
          </div>
          <div className='mt-8 mb-1 ml-32'>
          <InputLabel setEmail={setEmail} setSenha={setSenha} />
          </div>
          <div className='p-1 justify-end ml-80'>
          <Botao texto="ESQUECI MINHA SENHA" width="8rem" height="1.0rem" py="1" fontSize="0.9rem" customClass="white" textColor="var(--cor-primaria)"/>
          </div>
          <div className="flex-col items-center justify-center mt-10">
            <div className = "flex justify-center mt-1">
              <Botao onClick={handleClick} texto="CADASTRAR" width="12rem" height="2.5rem" py="1" fontSize="1.3rem" customClass="var(--terciaria)" textColor="var(--cor-primaria)"/>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-end ml-44">
          <img src="assets/PhotoModel4.png" alt="imagem-cadastro" className="object-contain max-w-full h-auto" />
        </div>

      </div>
      
    </main>
  );
}