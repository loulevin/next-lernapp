import Navbar from "@/components/custom/Navbar";
import Sidebar from "@/components/custom/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col h-screen w-full font-inter">
      <div className="flex">
        <Navbar />
      </div>

      <div className="main-layout">{children}</div>
    </main>
  );
}
