'use client'
import { VscListFlat } from "react-icons/vsc";
import { IoMdArrowDropright } from "react-icons/io";
import { useModifiedPathName } from "@/app/hooks/useGetCustomPathName";

export const BreadCrumbs = () => {
    const { firstPath, secondPath } = useModifiedPathName()

    return (
        <div className="flex items-center">
            <VscListFlat className="text-gray-600 text-3xl mr-6"/>
            <h2 className="text-base text-gray-600 font-medium">{firstPath}</h2> 
            <IoMdArrowDropright className="mx-2 text-gray-500 text-2xl"/>
            <h2 className="text-base text-blue-500 font-semibold">{secondPath}</h2>
        </div>        
    )
}