import { NavBar } from "@/components/NavBar"

export default function Carrinho() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar/>

      <h2>Carrinho</h2>
    </main>
  );
}
