"use client"
import { FlipWords } from "@/components/ui/flip-words";
import { Vortex } from "@/components/ui/vortex";
import React, { useEffect } from "react";
// import { Boxes } from "@/components/ui/background-boxes";
// import { cn } from "@/lib/utils";



export default function home() {
  const words : string[]=["ice","cocaine",'meth','heroin','alcohol','nicotine','(butt)crack'];
  return (
    <div>
       <Vortex
        backgroundColor= "transparent"
        rangeY={800}
        particleCount={500}
        baseHue={250}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
    <div className="flex flex-col h-dvh justify-center  items-center">
      <h1 className="font-bold text-5xl text-start mx-3">I love <FlipWords words={words} duration={1}/></h1>
    </div>
    </Vortex>
    </div>
  );
}

