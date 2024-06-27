'use client'

import { navbarLinks } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <section className="w-screen width-responive">
        <nav className="navbar-layout">
        {navbarLinks.map((link) => (
            <Link href={link.route} key={link.label} className="nav-link">
              <p className={`nav-label ${router.pathname === link.route ? 'active' : ''}`}>
                {link.label}
              </p>
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
