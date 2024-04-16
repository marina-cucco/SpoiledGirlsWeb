import Link from "next/link";
interface NavBarProps {
  active: "home" | "cadastro" | "carrinho";
}

export function NavBar(props: NavBarProps) {
  const active = props.active;
  const classActive = "border-b-4 border-white pb-3";

  return (
    <nav className=' flex justify-between items-center px-8 py-2 bg-zinc-900 w-full'>
      <Link href="/">
        <h1
          className='ml-20 text-center text-white'
          style={{ fontSize: "2.81rem", fontFamily: "Prata, serif" }}
          >
          Spoiled Girls Club
        </h1>
      </Link>
      {/*
        <ul className="flex gap-6">
          <li className={active == "home" ? classActive : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={active == "cadastro" ? classActive : ""}>
            <Link href="/">Cadastro</Link>  
          </li>
          <li className={active == "carrinho" ? classActive : ""}>
            <Link href="/">Carrinho</Link>
          </li>
        </ul>
        */}
      <div className='ml-96 pl-48'>
        <Link href={"/Carrinho/"}>
          <img
            src='/assets/carrinho.svg'
            alt='Carrinho de compras'
            width='42'
            height='42'
          />
        </Link>
      </div>
      <div className='size-14 rounded-full overflow-hidden mr-24 mb-2'>
        <img
          className='flex justify-center'
          src='/assets/user.svg'
          alt='Avatar do usuário'
        />
      </div>
    </nav>
  );
}
