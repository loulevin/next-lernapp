import { navbarLinks } from "@/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <section className="w-screen">
        <nav className="navbar-layout">
          {navbarLinks.map((link) => {
            return (
              <Link href={link.route} key={link.label} className="">
                <p className="">{link.label}</p>
              </Link>
            );
          })}
        </nav>
      </section>
    </>
  );
}
