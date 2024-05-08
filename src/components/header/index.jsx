'use client'
import { useModifiedPathName } from "@/hooks/useGetCustomPathName"

export const Header = () => {
    const { secondPath } = useModifiedPathName()

    return <h1 className="text-3xl font-semibold">{secondPath}</h1>
}