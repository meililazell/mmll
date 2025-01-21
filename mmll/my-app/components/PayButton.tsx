"use client";

import React from "react";
import { Icons } from './icons';

export default function PayButton({ url, text }) {
    const handleClick = () => {
      window.open(url, "_blank");
    };
  
    return (
      <button
        className="w-full flex justify-center items-center space-x-2 bg-[#3b7bbf] hover:bg-[#3b7bbf]/90"
        onClick={handleClick}
      >
        <Icons.paypal className="h-5 w-5" />
        <span>Donate with {text}</span>
      </button>
    );
  }