import { Botao } from "@/components/Botao";
import Link from "next/link";

export function ContainerRoupa({
    roupa = "ROUPA", preco = "00,00", imagem = "/assets/", alt = ""}) { 
  return (
    
    <div className="py-10">
        <img
         className="w-80 h-80" src={imagem} alt={alt}
         style={{ 
            width: "18.75rem",
            height : "18.75rem",
        }}/>               
        <div>
            <div className="mt-7 mb-4">
                <h1
                style={{ fontSize: "1.5rem", fontFamily: "Prata, serif", color:"var(--cor-primaria)"}}>
                    {roupa}
                </h1>
                <h5 className="font-bold"
                style={{ fontSize: "1.5rem", fontFamily: "Libre Baskerville, serif", color:"var(--cor-primaria)"}}>
                    R${preco}
                </h5>
            </div>     
            <Botao texto="COMPRAR" width="18.75rem" height="4rem"></Botao>
        </div>
    </div>
    
  );
}
