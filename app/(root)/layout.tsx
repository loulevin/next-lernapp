import Sidebar from "@/components/custom/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div>{children}</div>
    </main>
  );
}
