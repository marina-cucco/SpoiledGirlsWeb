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
        <div>
          <div className="flex items-center justify-center gap-20 px-2">
            <ContainerRoupa
              roupa='Macacão Jeans'
              preco='249.99'
              imagem='/assets/Outfits/Casuals1.png'
            />
            <ContainerRoupa
              roupa='T-Shirt Básica'
              preco='39.99'
              imagem='/assets/Outfits/Casuals2.png'
            />
            <ContainerRoupa
              roupa='Jaqueta de Couro'
              preco='119.99'
              imagem='/assets/Outfits/Casuals3.png'
            />
          </div>     
          <div className="flex items-center justify-center gap-20">
          <ContainerRoupa
              roupa='Jaqueta Jeans'
              preco='79.99'
              imagem='/assets/Outfits/Casuals8.png'
            />
            <ContainerRoupa
              roupa='Camiseta Social Branca'
              preco='59.99'
              imagem='/assets/Outfits/Casuals7.png'
            />
            <ContainerRoupa
              roupa='Mommy Jeans'
              preco='79.99'
              imagem='/assets/Outfits/Casuals4.png'
            />
          </div>
          <div className="flex items-center justify-center gap-20 mb-16">
          <ContainerRoupa
              roupa='Casaco Esportivo'
              preco='89.99'
              imagem='/assets/Outfits/Casuals5.png'
            />
            <ContainerRoupa
              roupa='Flare Jeans'
              preco='74.99'
              imagem='/assets/Outfits/Casuals9.png'
            />
            <ContainerRoupa
              roupa='Minivestido em Seda'
              preco='119.99'
              imagem='/assets/Outfits/Casuals6.png'
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
