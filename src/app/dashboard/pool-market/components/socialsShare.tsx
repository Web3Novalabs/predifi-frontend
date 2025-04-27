import { Copy } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface SocialsShareProps {
  socialShare: { logo: string; name: string }[];
}

export default function SocialsShare({ socialShare }: SocialsShareProps) {
  return (
    <div className="flex flex-col gap-8 items-center ">
      <div className="flex flex-row justify-between lg:md:gap-4 items-center my-4">
        {socialShare.map((social, index) => (
          <SocialsMedia key={index} logo={social.logo} name={social.name} />
        ))}
      </div>
      <div className="w-full">
        <p className="text-white font-semibold">Pool Link</p>

        <div className="border flex gap-2 items-center justify-between p-2 ">
          <p className="italic lg:md:text-md text-sm">
            www.predifi/eventdetails.com
          </p>
          <Copy />
        </div>
      </div>
    </div>
  );
}

interface SocialsMediaProps {
  logo: string;
  name: string;
}

export function SocialsMedia({ logo, name }: SocialsMediaProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="lg:md:w-[50px] lg:md:h-[50px] w-[30px] flex justify-center items-center  ">
        <Image src={logo} alt="holder" width={100} height={100} />
      </div>

      <p className="text-white font-bold lg:md:text-lg">{name}</p>
    </div>
  );
}
