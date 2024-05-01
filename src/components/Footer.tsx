export function Footer(){
    return(
            <footer className="py-10" style={{fontFamily: "Libre Baskerville, serif", color: "var(--cor-texto-btn)", backgroundColor: "var(--cor-primaria)" }}>
            <div className="flex flex-col md:flex-row justify-between items-center px-24">
                <div className="text-base">
                    <h2 className="text-2xl font-bold">Sobre</h2>
                    <img src="/assets/line.svg"/>
                    <h4 className="py-2">Sobre o Spoiled Girls Club</h4>
                    <h4 className="py-1">Termos e condições</h4>
                </div>

                <div className="text-base">
                    <h2 className="text-2xl font-bold">Informações</h2>
                    <img src="/assets/line.svg"/>
                    <h4 className="py-2">Rastreie o seu pedido</h4>
                    <h4 className="py-1">Política de entrega</h4>
                </div>

                <div className="text-base">
                    <h2 className="text-2xl font-bold">Ajuda</h2>
                    <img src="/assets/line.svg"/>
                    <h4 className="py-2">Central de atendimento</h4>
                    <h4 className="py-1">Política de privacidade</h4>
                </div>

                <div className="text-base">
                    <h2 className="text-2xl font-bold">Social Media</h2>
                    <img src="/assets/line.svg"/>
                    <img className="flex items-center py-7 px-6" src="/assets/socials.svg"/>
                </div>
            </div>
        </footer>
    );
}
