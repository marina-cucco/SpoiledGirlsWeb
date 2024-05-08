"use server";

export async function create(data:{id: string, // Exemplo de valor para id
email: string,
senha: string}) {
    const resp = await fetch(`http://localhost:8080/cadastro/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },

     });

     return resp.ok;
}