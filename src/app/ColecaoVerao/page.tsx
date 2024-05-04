import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";
import { Footer } from "@/components/Footer";
import { ContainerRoupa } from "@/components/ContainerRoupa";

export default function ColecaoVerao() {
  return (
    <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
      <main className='flex min-h-screen flex-col items-center'>
        <NavBar />
        <NavHome active='colecaoVerao' />
        <h1
          className='my-6'
          style={{
            fontSize: "2.18rem",
            fontFamily: "Libre Baskerville, serif",
            color: "var(--cor-primaria)",
          }}
        >
          Desperte sua beleza natural com leveza e suavidade.
        </h1>
        <img className='' src='assets/PhotoModel7.png' />
        <div>
          <div className='flex items-center justify-center gap-20 px-2'>
            <ContainerRoupa
              roupa='Camisa Popeline'
              preco='49.99'
              imagem='/assets/Outfits/Summer1.png'
            />
            <ContainerRoupa
              roupa='Shorts Risca de Giz'
              preco='59.99'
              imagem='/assets/Outfits/Summer2.png'
            />
            <ContainerRoupa
              roupa='Vestido Macrocannage'
              preco='74.99'
              imagem='/assets/Outfits/Summer3.png'
            />
          </div>
          
          <div className='flex items-center justify-center gap-20'>
            <ContainerRoupa
              roupa='Camisa Listrada'
              preco='49.99'
              imagem='/assets/Outfits/Summer4.png'
            />
            <ContainerRoupa
              roupa='Cropped Gola Alta'
              preco='39.99'
              imagem='/assets/Outfits/Summer5.png'
            />
            <ContainerRoupa
              roupa='Minissaia de Couro'
              preco='64.99'
              imagem='/assets/Outfits/Summer6.png'
            />
          </div>
          
          <div className='flex items-center justify-center gap-20 mb-16'>
            <ContainerRoupa
              roupa='Minivestido Gabardine'
              preco='79.99'
              imagem='/assets/Outfits/Summer7.png'
            />
            <ContainerRoupa
              roupa='Vestido Gabardine'
              preco='84.99'
              imagem='/assets/Outfits/Summer8.png'
            />
            <ContainerRoupa
              roupa='Vestido Curto'
              preco='74.99'
              imagem='/assets/Outfits/Summer9.png'
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
