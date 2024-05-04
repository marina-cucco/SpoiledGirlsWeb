export function Botao({texto = 'COMPRE AGORA', width = '18rem', height = '4.3 rem', py= '2rem', fontSize = '2.5rem'}) { 
    return (
        <button 
                className={`py-${py} flex items-center justify-center`}
                style={{ 
                    fontSize, 
                    fontFamily: "Bebas Neue, serif", 
                    backgroundColor:"var(--cor-primaria)", 
                    color:"var(--cor-texto-btn)",
                    width: width,
                    height : height,
                    }}>               
                {texto}
        </button>
    );
}