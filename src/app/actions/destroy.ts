"use server";

export async function destroy(id: string) {
    const resp = await fetch(`http://localhost:8080/cadastro/${id}`, {method: "DELETE",

     })
}