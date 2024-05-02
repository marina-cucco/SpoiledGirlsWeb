import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";
import { Footer } from "@/components/Footer";
import { ContainerRoupa } from "@/components/ContainerRoupa";

export default function ColecaoCasuals() {
  return (
    <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
      <main className='flex min-h-screen flex-col items-center'>
        <NavBar />
        <NavHome active='colecaoCasuals' />
        <h1
          className='my-6'
          style={{
            fontSize: "2.18rem",
            fontFamily: "Libre Baskerville, serif",
            color: "var(--cor-primaria)",
          }}
        >
          Essenciais para o seu dia a dia.
        </h1>
        <img className='' src='assets/PhotoModel4.png' />
        <div className="flex items-center justify-center gap-20 mb-16">
          <ContainerRoupa
            roupa='Macacão Jeans'
            preco='249.99'
            imagem='/assets/Outfits/Casuals1.png'
          />
          <ContainerRoupa
            roupa='T-Shirt Preta'
            preco='39.99'
            imagem='/assets/Outfits/Casuals2.png'
          />
          <ContainerRoupa
            roupa='Jaqueta de Couro'
            preco='119.99'
            imagem='/assets/Outfits/Casuals3.png'
          />
        </div>     
      </main>
      <Footer></Footer>
    </div>
  );
}
