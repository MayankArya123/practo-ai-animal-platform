
"use client";

import Link from "next/link";
import { useState } from "react";
import { PawPrint, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-green-100 p-2 text-green-700">
            <PawPrint size={25} />
          </span>
          <span className="text-xl font-extrabold text-gray-900">
            Practo<span className="text-green-700">Pets</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-gray-600 md:flex">
          <Link href="/#services" className="hover:text-green-700">Services</Link>
          <Link href="/#providers" className="hover:text-green-700">Find Care</Link>
          <Link href="/ai-programs" className="hover:text-green-700">AI Education</Link>
          <Link href="/content-studio" className="hover:text-green-700">Content Studio</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#list-business" className="rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white hover:bg-green-800">
            List Your Business
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-gray-700 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="space-y-4 border-t bg-white px-5 py-5 md:hidden">
          <Link onClick={() => setOpen(false)} className="block" href="/#services">Services</Link>
          <Link onClick={() => setOpen(false)} className="block" href="/#providers">Find Care</Link>
          <Link onClick={() => setOpen(false)} className="block" href="/ai-programs">AI Education</Link>
          <Link onClick={() => setOpen(false)} className="block" href="/content-studio">Content Studio</Link>
          <a onClick={() => setOpen(false)} href="#list-business" className="block font-bold text-green-700">List Your Business</a>
        </div>
      )}
    </header>
  );
}
