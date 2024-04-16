
import { NavBar } from "@/components/NavBar"

export default function Cadastro() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="cadastro"/>

      <h2>Categorias</h2>
    </main>
  );
}
