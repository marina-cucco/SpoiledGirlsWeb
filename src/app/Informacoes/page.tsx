"use client";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import InputInfo from "@/components/InputInfo";
import { Botao } from "@/components/Botao";
import { destroy } from "../actions/destroy";
import { get } from "@/app/actions/get";
import Link from "next/link";
import {useState} from "react";
import { useEffect } from 'react';


interface Cadastro {
    id: number,
    email: string,
    senha: string
}

export default function Informacoes({id}: Cadastro) {
    const [logado, setLogado] = useState(false); // Estado para controlar se o usuário está logado
    const [perfil, setPerfil] = useState<Cadastro | null>(null); // Estado para armazenar as informações do perfil
    const [idUsuario, setIdUsuario] = useState<number | null>(null); // Estado para armazenar as informações do perfil

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

    const handleLogin = async () => {
        console.log("iniciando")
        try {
            // Lógica de login aqui...
            // Verifica se o login foi bem-sucedido e se o perfil existe na API
            const perfilData = await get();
            setPerfil(perfilData)
            if (perfilData) {
                setLogado(true); // Define o estado logado como true se o login for bem-sucedido
                setIdUsuario(perfilData[0].id)
            } else {
                console.error("Usuário não encontrado.");
                alert("Usuário não encontrado!")
            }
        } catch (error) {
            console.error("Erro ao efetuar login:", error);
            alert("Usuário não encontrado!")
        }
    };

    async function handleDelete() {
        if (!idUsuario) return

        destroy(idUsuario)
    }

    //const categorias: Array<Cadastro> = await get()
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
                            Informações do Perfil
                            <div className='mt-8 mb-1 my-32 ml-8'>
                                <InputInfo />
                                <div className='p-2 justify-end ml-48'>
                                <Botao onClick = {handleLogin} texto="login" width="7rem" height="3.00" py="1" fontSize="1.2rem" customClass="var(--cor-primaria)" textColor="var(--cor-texto-btn)" />
                            </div>
                            </div>
                            {logado && perfil &&(
                                <div>
                                    <div className="flex p-12">
                                        <div style={{ marginRight: "10px" }}>
                                            <Link href="/NovaSenha">
                                                <Botao texto="Alterar Senha" width="9rem" height="3.00" py="1" fontSize="1.2rem" customClass="var(--cor-primaria)" textColor="var(--cor-texto-btn)" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Botao texto="Apagar Conta" onClick={handleDelete} width="9rem" height="3.00" py="1" fontSize="1.2rem" customClass="red" textColor="var(--cor-texto-btn)" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </h1>
                        


                    </div>

                    
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
