import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow p-8">
          {/* Konten utama */}
        </main>
      </div>
    </div>
  );
}
