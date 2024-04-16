import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome"

export default function Home() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="home"/>
      <NavHome active="home"/>

    </main>
  );
}
