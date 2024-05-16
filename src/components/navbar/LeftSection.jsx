'use client'

import { useModifiedPathName } from "@/hooks/useGetCustomPathName"

export const LeftSection = () => {
    const { firstPath, secondPath } = useModifiedPathName()

    return (
        <>          
        <div className="text-black font-semibold text-2xl tracking-wide px-1 rounded-md">{firstPath} {secondPath}</div>
        </>
    )
}