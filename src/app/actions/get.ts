"use server"

export async function get(){
    //await new Promise(r => setTimeout(r, 3000))

    const resp = await fetch("http://localhost:8080/Cadastro/", {next : {tags: ["cadastro"]}})

    console.log("foi")
    return await resp.json()

}