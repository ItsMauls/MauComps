import { menu } from "@/constants/navigation-menu"
import AccordionMenu from "../accordion"

export const NavigationMenu = () => {
    return (
        <>
        {menu.map((val, idx) => {
            const subMenu = val.subMenu
            console.log(idx, 'sss')
            return (
                <AccordionMenu
                    icon={val.logo}
                    link={val.link}
                    key={idx}
                    className={'text-white mx-auto my-4'}
                    idx={idx}
                    trigger={val.name}
                    subMenu={subMenu}
                />
            )
        })}
        </>
    )
}