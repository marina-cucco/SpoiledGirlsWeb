import { Botao } from "@/components/Botao";
import Link from "next/link";

export function Colecao({
    titulo = "TÍTULO", subtitulo = "Subtítulo", imagem = "/assets/", alt = "", link = '/', customClass="ml-40"}) { 
  return (
    <div className="flex items-center justify-center mt-10 mb-16">
        <div className="flex flex-col justify-center">
            <h1 
                className='mb-3 font-bold'
                style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif", color:"var(--cor-primaria)"}}>
                {titulo}
            </h1>
            <span 
                className='mb-28 italic'
                style={{ fontSize: "2.18rem", fontFamily: "Libre Baskerville, serif", color:"var(--cor-primaria)"}}
                dangerouslySetInnerHTML={{__html: subtitulo}}>
            </span>
            <Link href= {link}>
                <Botao/>
            </Link>
        </div>
        <div className={`${customClass}`}>
            <img src={imagem} alt={alt} />
        </div>
    </div>
  );
}
