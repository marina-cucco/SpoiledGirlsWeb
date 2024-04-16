import { NavBar } from "@/components/NavBar"

export default function Cadastro() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="cadastro"/>

      <h3 className='ml-20 text-slate-950' 
        style={{ fontSize: "1.80rem", fontFamily: "Prata, serif" }}>
          Seja Bem Vinda!
      </h3>
      <h1
        className='ml-20 text-slate-950' 
        style={{ fontSize: "2.81rem", fontFamily: "Prata, serif" }}
      >
        Spoiled Girls Club
        
      </h1>
      <div className="flex-col items-center justify-center my-4">
      <img src='/assets/line.svg' alt='line'/>
      <div className="flex space-x-6 items-center justify-center my-4">
      <img src='/assets/Group 1.svg' alt='google'/>
      <img src='/assets/Group 2.svg' alt='facebook'/>
      </div>
      </div>
      <h4 className='ml-20 text-slate-950' 
        style={{ fontSize: "2.81rem", fontFamily: "Prata, serif" }}>
        Cadastre-se
        </h4>
    </main>
  );
}
