import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";

export default function ColecaoVerao(){
    return(
        <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <main className="flex min-h-screen flex-col items-center">
                <NavBar/>
                <NavHome active="colecaoVerao"/>
                <h1 className='p-6 mb-4'
                style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif", color: "var(--cor-primaria)"}}>Desperte sua beleza natural com leveza e suavidade.
                </h1>
            </main>
        </div>

    );
}