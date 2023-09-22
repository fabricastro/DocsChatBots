import React from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Redes } from './../redes/Redes';

export const Cards =()=> {
  return (
    <Card className="max-w-[700px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Chatbots SJ"
          height={40}
          radius="sm"
          src="src/assets/logo-bot.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md"></p>
          <p className="text-small text-default-500">chatbots.com.ar</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="py-2">Visitanos en nuestras redes o consultanos por ahí</p>
      <Redes></Redes>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
