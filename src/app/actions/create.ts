"use server";

export async function create(data:{
email: string,
senha: string}) {
    const resp = await fetch(`http://localhost:8080/Cadastro`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },

     });

     return resp.ok;
}