import React from "react";
import { Input } from "@nextui-org/react";

export default function InputLabel() {
  return (
    <div className="w-center flex flex-col gap-4">
      <div className="flex w-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <label htmlFor="email" className="text-gray-600 mb-1">Email</label>
        <Input
          isRequired
          type="email"
          placeholder="blairwaldorf@gmail.com"
          variant="flat"
        />
      </div>

      <div className="flex w-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <label htmlFor="senha" className="text-gray-600 mb-1">Senha</label>
        <Input
          isRequired
          type="senha"
          placeholder="**************"
          variant="flat"
        />
      </div>
    </div>
  );
}
