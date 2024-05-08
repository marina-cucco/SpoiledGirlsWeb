import React from "react";
import { Input } from "@nextui-org/input";
import {useState} from "react";
import { create } from "@/app/actions/create";

interface InputLabelProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputLabel({ setEmail, setSenha }: InputLabelProps) {
    

  return (
    <div className="w-center flex flex-col gap-8">
        <div className="flex w-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            isRequired
            type = "email"
            placeholder="blairwaldorf@gmail.com"
            variant="flat"
            className="max-w-xs"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="flex w-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        
          <Input
            isRequired
            onChange={(event) => setSenha(event.target.value)}
            type="senha"
            placeholder="**************"
            variant="flat"
            className="max-w-xs"

          />
        </div>
      
    </div>
  );
}
