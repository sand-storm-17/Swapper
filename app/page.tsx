"use client";

import { LuSettings2 } from "react-icons/lu";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function Home() {
  const wallet = useWallet();
  const connection = useConnection();
  const [balance, setBalance] = useState(0);
  const updateBalance = async () => {
    const currentBalance = await connection.connection.getBalance(
      wallet.publicKey!
    );
    setBalance(currentBalance);
  };
  if (wallet.connected) {
    updateBalance();
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full max-h-full h-4/5">
      <div className="text-white font-mono text-6xl flex-wrap w-[600px] text-center font-bold mb-10">
        Swap anytime, anywhere.
      </div>
      <div className="flex items-center justify-center bg-white p-4 text-black rounded-xl w-[400px]">
        <div className="flex flex-col p-3 gap-4">
          {/* TOP */}
          <div className="flex items-center justify-between">
            {/* OPTIONS */}
            <div className="flex">
              <button className="hover:bg-gray-100 p-2 rounded-xl text-sm hover:text-blue-500 gap-2">
                Market
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-xl text-sm hover:text-blue-500 gap-2">
                Limit
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-xl text-sm hover:text-blue-500 gap-2">
                Send
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-xl text-sm hover:text-blue-500 gap-2">
                Buy
              </button>
            </div>
            {/* FILTER */}
            <div>
              <button>
                <LuSettings2 />
              </button>
            </div>
          </div>
          {/* MID */}
          <div className="flex flex-col gap-2">
            {/* YOU PAY */}
            <div className="flex justify-between items-center bg-gray-50 p-2 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600 font-semibold">You pay</p>
                <input
                  type="number"
                  className="font-semibold border text-gray-800 w-1/2 p-2 rounded-lg"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-center text-black gap-2">
                <select value="SOL" className="p-2 border rounded-lg">
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                </select>
                <div className="flex text-xs font-semibold text-gray-500 gap-1">
                  <span>Balance:</span>
                  <span>{balance}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <IoArrowDownOutline />
            </div>
            {/* YOU GET */}
            <div className="flex justify-between items-center bg-gray-50 p-2 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600 font-semibold">You get</p>
                <input
                  type="number"
                  className="font-semibold border text-gray-800 w-1/2 p-2 rounded-lg"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-center text-black gap-2">
                <select value="SOL" className="p-2 border rounded-lg">
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                </select>
                <div className="flex text-xs font-semibold text-gray-500 gap-1">
                  <span>Balance:</span>
                  <span>{balance}</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <button className="w-full bg-blue-600 rounded-xl p-2 text-white">
              Swap
            </button>
            <div className="flex text-xs justify-between w-full">
              <span>1 USDT = 0.00034 WETH ($0.999)</span>
              <div className="flex items-center gap-2">
                <FaGasPump />
                <span>$1.71</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
