import { usePathname } from "next/navigation"

export const useModifiedPathName = () => {
    const pathName = usePathname()

    const splittedPath = pathName.split('/')
    const tempFirstPath = splittedPath[1].split('')[0].toUpperCase() + splittedPath[1].slice(1)
    const firstPath = tempFirstPath
    console.log(splittedPath.slice(2).join(''), 'dengna')
    const tempSecondPath = splittedPath.slice(2).join('-').replace(/-/g, ' ')
    const separatedWords = tempSecondPath.split(' ')
    const secondPath = separatedWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    return {
        firstPath,
        secondPath
    }
}