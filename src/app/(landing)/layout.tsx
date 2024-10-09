import Header from "@/components/bar/Header";
import Navbar from "@/components/bar/NavBar";

export default function LendingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header />
      <Navbar />

      {children}
    </div>
  );
}
