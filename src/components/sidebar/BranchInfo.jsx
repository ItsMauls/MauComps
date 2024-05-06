import Image from "next/image"

export const BranchInfo = () => {
    return (
        <section className="flex justify-center mr-20 mt-2 items-center mx-auto">   
            <div className="mx-4">
                <Image 
                    alt="branch"
                    className="rounded-full w-[34px] h-[34px]"
                    src={'/apotek_rox.webp'}
                    width={500}
                    height={500}
                    quality={100}
                />
            </div>
            <div className="text-white">
                <h1 className="font-semibold text-[14px]">Apotek Roxy Biak</h1>
                <h2 className="font-light text-[12px]">Kode Cabang : 0000</h2>
            </div>
        </section>
    )
}