import { NavBar } from "@/components/NavBar";

export default function Home() {
  return ( //arquivo JSX - gera o html na hora de renderizar mas nao eh exatamente html
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="home"/>

      <h2>Home</h2>
    </main>
  );
}
