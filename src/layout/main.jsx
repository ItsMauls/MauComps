import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"

export const MainLayout = ({children}) => {
    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <main className="flex-grow p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}