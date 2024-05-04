import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";

export default function Colecoes(){
    return(
        <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <main className="flex min-h-screen flex-col items-center">
                <NavBar/>
                <NavHome active="todasColecoes"/>
                <h1 className='p-6 mb-4'
                style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif", color: "var(--cor-primaria)"}}>Explore nossa variedade completa de estilos e tendências.
                </h1>
            </main>
        </div>

    );
}