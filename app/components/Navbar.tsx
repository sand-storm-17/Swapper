"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-100 text-black flex px-4 py-2 justify-between">
      {/* LEFT */}
      <div className="flex gap-4">
        <Image
          src="/favicon.ico"
          alt=""
          height={36}
          width={36}
          className="object-contain"
        />
        <div className="flex gap-2 flex-wrap lg:flex">
          <button className="hover:border-b-blue-500 hover:border-b-2 p-2 hover:text-blue-500 font-mono font-md">
            Swap
          </button>
          <button className="hover:border-b-blue-500 hover:border-b-2 p-2 hover:text-blue-500 font-mono font-md">
            Explore
          </button>
          <button className="hover:border-b-blue-500 hover:border-b-2 p-2 hover:text-blue-500 font-mono font-md">
            NFT&apos;s
          </button>
          <button className="hover:border-b-blue-500 hover:border-b-2 p-2 hover:text-blue-500 font-mono font-md">
            Pools
          </button>
          <button className=" hover:border-b-blue-500 hover:border-b-2 p-2 hover:text-blue-500 font-mono font-md">
            More
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex justify-center items-center">
        <WalletMultiButton style={{borderRadius: "0.75rem"}} />
      </div>
    </div>
  );
};

export default Navbar;
