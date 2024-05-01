import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";
import { Footer } from "@/components/Footer";

export default function ColecaoCasuals(){
    return(
        <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <main className="flex min-h-screen flex-col items-center">
                <NavBar/>
                <NavHome active="colecaoCasuals"/>
                <h1 className='p-6 mb-4'
                style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif", color: "var(--cor-primaria)"}}> 
                    Essenciais para o seu dia a dia.
                </h1>
            </main>
            <Footer></Footer>
        </div>

    );
}