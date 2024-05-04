import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Botao } from "@/components/Botao";
import { TamanhosRoupa } from "@/components/TamanhosRoupa";
import { Footer } from "@/components/Footer";

export default function ViewProduto() {
  return (
    <div style={{ maxHeight: "100vh", overflowY: "scroll", fontFamily: "Libre Baskerville, serif", color:"var(--cor-primaria)"}}>
      <main className='flex min-h-screen flex-col items-center'>
        <NavBar />
        <div className="flex items-center mb-12 pr-16 gap-32">
            <div className="">
                <Link href={"/Colecoes/"}>
                    <img src="/assets/arrow-back.svg" alt="Botão para voltar a página" className="py-4 mt-8"/>
                </Link>
                <img style={{ 
                    width: "31rem",
                    height : "31rem",
                }}
                    src="/assets/Outfits/Casuals1.png" alt="" 
                />
                <div className="py-6">
                    <Botao texto="COMPRAR" width="31rem" height="3.75rem"></Botao>
                </div>
            </div>
            <div>
                <div className="mb-24">
                    <h1 className = "font-bold" style={{ fontSize: "2.1rem"}}>
                    Macacão Jeans
                    </h1>
                    <h2 className = "mt-2" style={{ fontSize: "1.8rem"}}>
                        R$79.99
                    </h2>
                </div>
                <div className="mb-9">
                    <h3 style={{ fontSize: "1.5rem"}}>
                        Tamanho
                    </h3>
                    <img src="/assets/line2.svg" alt="" />
                    <TamanhosRoupa/>
                </div>
                <div>
                    <h3 style={{ fontSize: "1.5rem"}}>
                        Descrição
                    </h3>
                    <img src="/assets/line2.svg" alt="" />
                    <div className="max-w-80 mt-2 text-justify">
                        <span className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum expedita rem nemo aliquid illo culpa.
                        </span>
                    </div>
                </div>
            </div>
        </div>       
      </main>
      <Footer></Footer>
    </div>
  );
}
