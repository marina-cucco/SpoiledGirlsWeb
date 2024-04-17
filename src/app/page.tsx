import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";
import { Colecao } from "@/components/Colecao";

export default function Home() {
  return (
    <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
      <main className="flex min-h-screen flex-col items-center">
        <NavBar/>
        <NavHome active="home"/>
        <h1 className='text-gray-900 p-6 mb-4'
            style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif"}}>Desperte sua Essência, Eleve seu Estilo.</h1>
        <Colecao/>

        <Colecao titulo="COLEÇÃO INVERNO 2024" subtitulo="Elegância e estilo em cada<br>detalhe." imagem="assets/PhotoModel2.png" alt="" customClass="ml-36"/>
        
        <Colecao titulo="COLEÇÃO VERÃO 2024" subtitulo="Desperte sua beleza natural<br>com leveza e suavidade." imagem="assets/PhotoModel3.png" alt="" customClass="ml-48 pl-2"/>
        
      </main>
    </div>
  );
}
