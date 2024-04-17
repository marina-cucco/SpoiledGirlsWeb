import { Botao } from "@/components/Botao";

export function Colecao({titulo = "COLEÇÃO CASUALS", subtitulo = "Essenciais para o seu dia a dia.", imagem = "/assets/PhotoModel1.png", alt = "",  customClass="ml-40"}) { 
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
            <Botao/>
        </div>
        <div className={`${customClass}`}>
            <img src={imagem} alt={alt} />
        </div>
    </div>
  );
}
