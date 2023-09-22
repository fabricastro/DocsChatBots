import React from "react";

import {Button} from "@nextui-org/react";
import { BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineWhatsApp } from 'react-icons/ai'

export const Redes =()=> {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="danger" size="lg" aria-label="Like">
      <BiLogoInstagram/>
      </Button>    
      <Button isIconOnly color="success" size="lg" aria-label="Take a photo">
        <AiOutlineWhatsApp/>
      </Button>
    </div>
  );
}
