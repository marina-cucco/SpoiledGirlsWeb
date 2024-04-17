import Link from "next/link";

interface NavHomeProps {
  active:
    | "home"
    | "colecaoCasuals"
    | "colecaoInverno"
    | "colecaoVerao"
    | "todasColecoes";
}

export function NavHome(props: NavHomeProps) {
  const active = props.active;
  const classActive = "border-b-2 border-black pb-1.5";

  return (
    <nav className='flex justify-center items-center  py-6 w-full'  style={{color:"var(--cor-primaria)", fontSize: "0.9rem"}}>
      <ul className='flex gap-6'>
        <li
          className={active == "home" ? classActive : ""}
          style={{fontFamily: "Prata, serif" }}
        >
          <Link href='/'>HOME</Link>
        </li>
        <li
          className={active == "colecaoCasuals" ? classActive : ""} 
          style={{fontFamily: "Prata, serif" }}
        >
          <Link href='/'>COLEÇÃO CASUALS</Link>
        </li>
        <li
          className={active == "colecaoInverno" ? classActive : ""}
          style={{fontFamily: "Prata, serif" }}
        >
          <Link href='/'>COLEÇÃO INVERNO 2024</Link>
        </li>
        <li
          className={active == "colecaoVerao" ? classActive : ""}
          style={{fontFamily: "Prata, serif" }}
        >
          <Link href='/'>COLEÇÃO VERÃO 2024</Link>
        </li>
        <li
          className={active == "todasColecoes" ? classActive : ""}
          style={{fontFamily: "Prata, serif" }}
        >
          <Link href='/'>TODAS AS COLEÇÕES</Link>
        </li>
      </ul>
    </nav>
  );
}
