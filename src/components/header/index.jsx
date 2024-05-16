'use client'
import { useModifiedPathName } from "@/hooks/useGetCustomPathName"

export const Header = () => {
    const { secondPath } = useModifiedPathName()

    return <h1 className="text-3xl mx-8 text-black font-semibold">{secondPath}</h1>
}