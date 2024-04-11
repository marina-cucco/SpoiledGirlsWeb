import { NavBar } from "@/components/NavBar"

export default function MCarrinho() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="carrinho"/>

      <h2>Movimentacoes</h2>
    </main>
  );
}
