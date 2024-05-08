"use server";

export async function put(id: string, data: { senha: string }) {
    const resp = await fetch(`http://localhost:8080/cadastro/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    });

    return resp.ok;
}
