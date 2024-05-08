"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Botao } from "@/components/Botao";
import {useState} from "react";
import { put } from "@/app/actions/put";
import { useEffect } from 'react';
import { get } from "@/app/actions/get";


interface Cadastro {
    id: number,
    email: string,
    senha: string
}

export default function NovaSenha({id}: Cadastro) {

    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [idUsuario, setIdUsuario] = useState<number | null>(null);
    const [perfil, setPerfil] = useState<Cadastro | null>(null);

    useEffect(() => {
        async function fetchPerfil() {
            try {
                const perfilData = await get(); // Chamando o método get para obter os dados do perfil
                setPerfil(perfilData)
                setIdUsuario(perfilData[0].id)
            } catch (error) {
                console.error("Erro ao buscar perfil:", error);
            }
        }

        fetchPerfil();
    }, []);
    
    const handleChangeNovaSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNovaSenha(event.target.value);
    };

    const handleChangeConfirmarSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(event.target.value);
    };

    const handleAlterarSenha = async () => {
        if (novaSenha !== confirmarSenha) {
            setMensagem('As senhas não coincidem.');
            return;
        }

        if (!idUsuario) {
            // Handle the case where idUsuario is null
            console.error('ID do usuário não encontrado.');
            return;
        }

        try {
            await put(idUsuario, { senha: novaSenha });
            setNovaSenha(novaSenha)
        
        } catch (error) {
            console.error('Erro ao alterar senha:', error);
            setMensagem('Erro ao alterar senha. Tente novamente mais tarde.');
        }
    };
    return (
        <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>

            <main className="flex min-h-screen flex-col">
                <NavBar />
                <div className="flex">
                    <div className="container">
                        <div className="conteudo">

                            <div className="justify-center my-28 ml-16">
                                <img src='assets/Usuário.png' />
                                <div className="ml-12 mt-2"><h1 style={{ fontFamily: "Libre Baskerville, serif", color: "var(--cor-primaria)", fontSize: "1.80rem" }}>
                                    Blair Waldorf</h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='flex mt-1 flex-col text-center my-2 justify-center mb-28' >
                        <h1
                            className='p-8'
                            style={{
                                fontSize: "2.18rem",
                                fontFamily: "Libre Baskerville, serif",
                                color: "var(--cor-primaria)",
                            }}
                        >
                            Alterar senha
                            <div className='flex-col flex-center mt-16' style={{
                                fontSize: "1.30rem",
                                fontFamily: "Libre Baskerville, serif",
                                color: "var(--cor-primaria)",
                            }}>
                                <div className='p-2 justify-end ml-48'>
                                    <div>
                                        <label htmlFor="novaSenha" className="input-label" >Nova Senha:</label>
                                        <input type="password" id="novaSenha" value={novaSenha} onChange={handleChangeNovaSenha} className="input-field" />
                                    </div>
                                    <div className="mr-20">
                                        <label htmlFor="confirmarSenha" className="input-label">Digite novamente:</label>
                                        <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={handleChangeConfirmarSenha} className="input-field" />
                                    </div>
                                    <Botao texto="ALTERAR SENHA" onClick={handleAlterarSenha} width="7rem" height="3.00" py="1" fontSize="1.2rem" customClass="var(--cor-primaria)" textColor="var(--cor-texto-btn)" />
                                    {mensagem && <p>{mensagem}</p>}
                            </div>
                            </div>
                            <div>
                            

                        </div>
                        </h1>
                        


                    </div>

                    
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
