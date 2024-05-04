import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";

export default function ColecaoInverno(){
    return(
        <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <main className="flex min-h-screen flex-col items-center">
                <NavBar/>
                <NavHome active="colecaoInverno"/>
                <h1 className='p-6 mb-4'
                style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif", color: "var(--cor-primaria)"}}>Elegância e estilo em cada detalhe.
                </h1>
            </main>
        </div>

    );
}