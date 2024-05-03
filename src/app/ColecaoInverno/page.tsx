import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";
import { Footer } from "@/components/Footer";
import { ContainerRoupa } from "@/components/ContainerRoupa";

export default function ColecaoInverno() {
  return (
    <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
      <main className='flex min-h-screen flex-col items-center'>
        <NavBar />
        <NavHome active='colecaoInverno' />
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
        <img className='' src='assets/PhotoModel6.png' />
        <div>
          <div className='flex items-center justify-center gap-20 px-2'>
            <ContainerRoupa
              roupa='Camisa Popeline'
              preco='49.99'
              imagem='/assets/Outfits/Winter1.png'
            />
            <ContainerRoupa
              roupa='Calça Pantalona'
              preco='69.99'
              imagem='/assets/Outfits/Winter2.png'
            />
            <ContainerRoupa
              roupa='Sobretudo Gabardine'
              preco='189.99'
              imagem='/assets/Outfits/Winter3.png'
            />
          </div>
          <div className='flex items-center justify-center gap-20'>
            <ContainerRoupa
              roupa='Blazer Amplo'
              preco='109.99'
              imagem='/assets/Outfits/Winter5.png'
            />
            <ContainerRoupa
              roupa='Moletom com Capuz'
              preco='69.99'
              imagem='/assets/Outfits/Winter6.png'
            />   
            <ContainerRoupa
              roupa='Calça Alfaiataria'
              preco='79.99'
              imagem='/assets/Outfits/Winter4.png'
            />        
          </div>
          <div className='flex items-center justify-center gap-20 mb-16'>
          <ContainerRoupa
              roupa='Camisa Slim Popeline'
              preco='59.99'
              imagem='/assets/Outfits/Winter8.png'
            />
          <ContainerRoupa
              roupa='Blazer Angorá'
              preco='89.99'
              imagem='/assets/Outfits/Winter9.png'
            />
            <ContainerRoupa
              roupa='Vestido Longo'
              preco='129.99'
              imagem='/assets/Outfits/Winter7.png'
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
