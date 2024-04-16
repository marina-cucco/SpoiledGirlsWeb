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
    <nav className='flex justify-center items-center  py-4 text-black w-full'>
      <ul className='flex gap-6'>
        <li
          className={active == "home" ? classActive : ""}
          style={{ fontSize: "1.2rem", fontFamily: "Prata, serif" }}
        >
          <Link href='/'>Home</Link>
        </li>
        <li
          className={active == "colecaoCasuals" ? classActive : ""} 
          style={{ fontSize: "1.2rem", fontFamily: "Prata, serif" }}
        >
          <Link href='/'>Coleção Casuals</Link>
        </li>
        <li
          className={active == "colecaoInverno" ? classActive : ""}
          style={{ fontSize: "1.2rem", fontFamily: "Prata, serif" }}
        >
          <Link href='/'>Coleção Inverno 2024</Link>
        </li>
        <li
          className={active == "colecaoVerao" ? classActive : ""}
          style={{ fontSize: "1.2rem", fontFamily: "Prata, serif" }}
        >
          <Link href='/'>Coleção Verão 2024</Link>
        </li>
        <li
          className={active == "todasColecoes" ? classActive : ""}
          style={{ fontSize: "1.2rem", fontFamily: "Prata, serif" }}
        >
          <Link href='/'>Todas as Coleções</Link>
        </li>
      </ul>
    </nav>
  );
}
