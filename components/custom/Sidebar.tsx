import { sidebarLinks } from "@/constants";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <section className="p-4">
        <nav>
          {sidebarLinks.map((link) => {
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
