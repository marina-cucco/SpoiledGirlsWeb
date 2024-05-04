import { Botao } from "@/components/Botao";

export function TamanhosRoupa() {
  return (
    <div>
      <div className='flex items-center gap-5 py-3'>
        <Botao texto='PP' height='3.2rem' width='6.5rem' fontSize='1.5rem' />
        <Botao texto='P' height='3.2rem' width='6.5rem' fontSize='1.5rem' />
        <Botao texto='M' height='3.2rem' width='6.5rem' fontSize='1.5rem' />
      </div>
      <div className='flex items-center gap-5'>
        <Botao texto='G' height='3.2rem' width='6.5rem' fontSize='1.5rem' />
        <Botao texto='GG' height='3.2rem' width='6.5rem' fontSize='1.5rem' />
      </div>
    </div>
  );
}
