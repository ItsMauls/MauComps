'use client'
import { usePathname } from "next/navigation"
import { BreadCrumbs } from "../ui/breadcrumbs"
import { SearchBar } from "../ui/Searchbar"
import { CiSearch } from "react-icons/ci"

export const LeftSection = () => {
    const pathName = usePathname()
    const inDashboard = pathName === '/'
    return (
        <>
            { inDashboard ? 
                <SearchBar
                    leftIcon={<CiSearch className="text-2xl" />}
                    rightIcon={<div className="border border-gray-300 font-semibold px-1 rounded-md">\</div>}
                    className="w-[410px] border-2 border-gray-200 font-medium"
                    id="navbarSearch"
                    placeholder="Cari No.Bon atau No.Transaksi disini"
            /> : 
                <BreadCrumbs />
            }
        </>
    )
}