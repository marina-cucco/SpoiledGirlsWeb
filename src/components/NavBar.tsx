import Link from "next/link";

interface NavBarProps{
    active: "home" | "cadastro" | "carrinho"
}

export function NavBar(props: NavBarProps){
    const active = props.active 
    const classActive = "border-b-4 border-white pb-3"

    return (
    <nav className=" flex justify-between items-center px-8 py-2 bg-zinc-800 w-full">
        <h1 className="text-4xl font-bold">Spoiled Girls Club</h1>
        <ul className="flex gap-6">
          <li className={active == "home" ? classActive : ""}>
            <Link href="/">home</Link>
          </li>
          <li className={active == "cadastro" ? classActive : ""}>
            <Link href="/">cadastro</Link>  
          </li>
          <li className={active == "carrinho" ? classActive : ""}>
            <Link href="/">carrinho</Link>
          </li>
        </ul>
        <div className="size-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar do usuario"/>
        </div>
    </nav>
    )
}