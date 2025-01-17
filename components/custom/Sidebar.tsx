import { navbarLinks } from "@/constants";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <section >
        <nav className="sidebar-layout">
          {navbarLinks.map((link) => {
            return (
              <Link href={link.route} key={link.label}>
                <p>{link.label}</p>
              </Link>
            );
          })}
        </nav>
      </section>
    </>
  );
}
