import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center">
        <Sidebar />
        <Navbar />
    </div>
  );
}
