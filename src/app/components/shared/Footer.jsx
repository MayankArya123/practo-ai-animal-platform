import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#142B21] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-xl font-bold">
            <PawPrint className="text-green-400" />
            PractoPets
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">
            Making animal care easier to discover, access and trust.
            Connecting pet parents with animal-care providers.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Explore</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <Link className="block hover:text-white" href="/#services">Services</Link>
            <Link className="block hover:text-white" href="/#providers">Find Providers</Link>
            <Link className="block hover:text-white" href="/ai-programs">AI Education</Link>
            <Link className="block hover:text-white" href="/content-studio">Content Studio</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Connect</h3>
          <a href="mailto:hello@example.com" className="mt-4 block text-sm text-gray-300 hover:text-white">
            Contact us
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-gray-400">
        © 2026 PractoPets. Concept prototype for product development assignment.
      </div>
    </footer>
  );
}
