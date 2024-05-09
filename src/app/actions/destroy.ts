"use server";

import { revalidateTag } from "next/cache";

export async function destroy(id: number) {
    const resp = await fetch(`http://localhost:8080/Cadastro/${id}`, {method: "DELETE",

     });

    revalidateTag("cadastro")
}