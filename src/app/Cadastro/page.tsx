import { NavBar } from "@/components/NavBar"

export default function Cadastro() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="cadastro"/>
    
    <div className="flex">
        <div className="flex-1">
            <div className='ml-20 text-slate-950  flex-col items-center text-center justify-start my-4' style={{fontFamily: "Prata, serif"}}>
                  <h3 style={{ fontSize: "1.80rem"}}>Seja bem-vinda(o)!</h3>
                  <h1 style={{ fontSize: "3.80rem"}}>Spoiled Girls Club</h1>
                  <img src='/assets/line.svg' alt='line'/>
                    <div className="flex space-x-6 items-center justify-center my-4">
                        <img src='/assets/Group 1.svg' alt='google'/>
                        <img src='/assets/Group 2.svg' alt='facebook'/>
                    </div>
                  <h4 style={{ fontSize: "1.80rem"}}>Cadastre-se</h4>
                <img src='/assets/login-cadastro.svg' alt='email de cadstro'/>
                <h4 style={{ fontSize: "1.00rem"}}>Já possui uma conta?</h4>
              </div>
        </div>
          <div className="flex-1 flex justify-end">
            <img src="assets/PhotoModel4.svg" alt="imagem-cadastro" className="object-contain max-w-full h-auto" />
            </div>
            
    </div>
    </main>
  );
}
