export function Botao({texto = 'COMPRE AGORA', width = '18rem', py= '2', fontSize = '2.5rem'}) { 
    return (
        <button 
                className={`py-${py}`}
                style={{ 
                    fontSize, 
                    fontFamily: "Bebas Neue, serif", 
                    backgroundColor:"var(--cor-primaria)", 
                    color:"var(--cor-texto-btn)",
                    width: width
                    }}>               
                {texto}
        </button>
    );
}