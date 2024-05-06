import { SearchBar } from "../ui/Searchbar"
import { BranchInfo } from "./BranchInfo"
import { NavigationMenu } from "./NavigationMenu"

export const Sidebar = () => {
    return (
    <aside className="w-1/5 p-2 h-screen bg-dark-blue">
        <BranchInfo />
        <SearchBar
            className={'my-5 w-[260px] py-1 px-6 mx-auto'}
            id={'sidebarSearch'}
            placeholder={'Cari fitur disini'}
        />
        <NavigationMenu />
    </aside>

    )
}