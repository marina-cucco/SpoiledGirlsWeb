import React from "react";
import { Input } from "@nextui-org/input";
import {useState} from "react";
import { create } from "@/app/actions/create";

export default function InputInfo() {
    





  return (
    <div className="w-full flex flex-col gap-8">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            isRequired
            type = "emailInfo"
            placeholder="blairwaldorf@gmail.com"
            variant="flat"
            className="max-w-xs"
            size="lg"
            label="Email"
            labelPlacement="outside"
            
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        
          <Input
            isRequired
            type="senhaInfo"
            placeholder="**************"
            variant="flat"
            className="max-w-xs"
            size="lg"
            label="Senha"
            labelPlacement="outside"

          />
        </div>
      
    </div>
  );
}