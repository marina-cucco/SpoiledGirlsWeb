import Link from "next/link";

export function NavBar() {
  return (
    <nav className=' flex justify-between items-center px-8 py-2 w-full' style={{backgroundColor: "var(--cor-primaria)"}}>
      <div className="flex items-center gap-2 ml-20">
        <img src="assets/logo2.svg" className="w-8 flex justify-center mr-2"/>
        <Link href="/">
          <h1
            className=''
            style={{ fontSize: "2.3rem", fontFamily: "Prata, serif", color:"var(--cor-texto-btn)"}}
            >
            Spoiled Girls Club
          </h1>
        </Link>
     </div>
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
