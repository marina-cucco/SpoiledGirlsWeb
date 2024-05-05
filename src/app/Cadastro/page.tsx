import { NavBar } from "@/components/NavBar"
import InputLabel from "@/components/InputLabel";
import { Botao } from "@/components/Botao";

export default function Cadastro() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
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
          <InputLabel />
          </div>
          <div className='p-1 justify-end ml-80'>
          <Botao texto="ESQUECI MINHA SENHA" width="8rem" height="1.0rem" py="1" fontSize="0.9rem" customClass="white" textColor="var(--cor-primaria)"/>
          </div>
          <div className="flex-col items-center justify-center mt-10">
          <h4 style={{ fontSize: "1.30rem" }}>Já possui uma conta?</h4>
            <div className = "flex justify-center mt-1">
              <Botao texto="LOGIN" width="12rem" height="2.5rem" py="1" fontSize="1.3rem" customClass="var(--terciaria)" textColor="var(--cor-primaria)"/>
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