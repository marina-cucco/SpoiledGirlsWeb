import React from "react";
import { Input } from "@nextui-org/input";

export default function InputLabel() {


  return (
    <div className="w-center flex flex-col gap-8">
        <div className="flex w-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            isRequired
            type="email"
            placeholder="blairwaldorf@gmail.com"
            variant="flat"
            className="max-w-xs"
          />
        </div>

        <div className="flex w-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        
          <Input
            isRequired
            type="senha"
            placeholder="**************"
            variant="flat"
            className="max-w-xs"

          />
        </div>
      
    </div>
  );
}
