import { NavBar } from "@/components/NavBar";
import { NavHome } from "@/components/NavHome";
import { Footer } from "@/components/Footer";
import { ContainerRoupa } from "@/components/ContainerRoupa";

export default function Colecoes(){
    return (
        <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
          <main className='flex min-h-screen flex-col items-center'>
            <NavBar />
            <NavHome active='todasColecoes' />
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
            <img className='' src='assets/PhotoModel8.png' />
            <div>
                <div className='flex items-center justify-center gap-20 px-2'>
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
                    roupa='Jaqueta Jeans'
                    preco='79.99'
                    imagem='/assets/Outfits/Casuals4.png'
                    />
                    <ContainerRoupa
                    roupa='Camisa Social'
                    preco='59.99'
                    imagem='/assets/Outfits/Casuals5.png'
                    />
                    <ContainerRoupa
                    roupa='Mommy Jeans'
                    preco='79.99'
                    imagem='/assets/Outfits/Casuals6.png'
                    />
                </div>

                <div className='flex items-center justify-center gap-20'>
                    <ContainerRoupa
                    roupa='Blazer Amplo'
                    preco='109.99'
                    imagem='/assets/Outfits/Winter4.png'
                    />
                    <ContainerRoupa
                    roupa='Moletom com Capuz'
                    preco='69.99'
                    imagem='/assets/Outfits/Winter5.png'
                    />
                    <ContainerRoupa
                    roupa='Calça Alfaiataria'
                    preco='79.99'
                    imagem='/assets/Outfits/Winter6.png'
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
                    roupa='Casaco Esportivo'
                    preco='89.99'
                    imagem='/assets/Outfits/Casuals7.png'
                    />
                    <ContainerRoupa
                    roupa='Flare Jeans'
                    preco='74.99'
                    imagem='/assets/Outfits/Casuals8.png'
                    />
                    <ContainerRoupa
                    roupa='Minivestido em Seda'
                    preco='119.99'
                    imagem='/assets/Outfits/Casuals9.png'
                    />
                </div>

                <div className='flex items-center justify-center gap-20 mb-16'>
                    <ContainerRoupa
                    roupa='Camisa Slim Popeline'
                    preco='59.99'
                    imagem='/assets/Outfits/Winter7.png'
                    />
                    <ContainerRoupa
                    roupa='Blazer Angorá'
                    preco='89.99'
                    imagem='/assets/Outfits/Winter8.png'
                    />
                    <ContainerRoupa
                    roupa='Vestido Longo'
                    preco='129.99'
                    imagem='/assets/Outfits/Winter9.png'
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