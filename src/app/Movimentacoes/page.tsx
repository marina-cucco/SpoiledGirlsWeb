import { NavBar } from "@/components/NavBar"

export default function Movimentacoes() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Movimentacoes"/>

      <h2>Movimentacoes</h2>
    </main>
  );
}
