"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "@/components/Icons"; // Assuming Icons is correctly imported

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Shkood<span className="text-green-600">!</span>
          </Link>
          <div className="flex flex-row gap-4">
            <Link href="/journey">
              Journey<span className="text-green-600">!</span>
            </Link>
            <Link href="/about">
              About<span className="text-green-600">!</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
