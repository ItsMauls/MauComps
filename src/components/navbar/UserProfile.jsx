import Image from "next/image"
import { FaCaretDown } from "react-icons/fa"

export const UserProfile = () => {
    return (
        <section className="flex items-center border-l-2 border-gray focus:outline-none">   
            <div className="mx-4">
                <Image
                    alt="branch"
                    className="rounded-full w-[38px] h-[38px]"
                    src={'/apotek_rox.webp'}
                    width={500}
                    height={500}
                    quality={100}
                />
            </div>
            <div>
                <h1 className="font-semibold text-black tracking-wider text-[14px]">Rangga</h1>
                <h2 className="text-sm text-gray-600 font-medium">Admin</h2>
            </div>
            <FaCaretDown
                className="m-3 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </section>
    )
}