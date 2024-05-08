"use client";

export function Botao({onClick = () => {}, texto = 'COMPRE AGORA', width = '18rem', height = '4.3 rem', py= '2', fontSize = '1.5rem', customClass = 'var(--cor-primaria)', textColor = 'var(--cor-texto-btn)' }) { 
    return (
        <button onClick={onClick}
                className={`py-${py} flex items-center justify-center`}
                style={{ 
                    fontSize, 
                    fontFamily: "Bebas Neue, serif", 
                    backgroundColor: customClass, 
                    color: textColor,
                    width: width,
                    height : height
                    }}>               
                {texto}
        </button>
    );
}