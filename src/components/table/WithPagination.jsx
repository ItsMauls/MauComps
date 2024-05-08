'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { PaginationButton } from "../ui/PaginationButton"

export const WithPagination = ({table}) => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const tablePage = searchParams.get('table-page') || 1

    
    return (
        <>
        <div className="h-2" />
            <footer className="gap-x-40 p-6 font-medium text-gray-500 border-t-gray-100 justify-between flex border-t bottom-0 w-full items-center gap-2 absolute">
                <div>
                    <h2>{'1-50 dari 24,818'}</h2>
                </div>               
                <PaginationButton 
                    currentPage={+tablePage}

                />            
                <span className="flex items-center gap-3 mx-1">
                Ke Halaman
                <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    table.setPageIndex(page);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            
                          const page = e.target.value ? Number(e.target.value) - 1 : 0;
                          router.push(`?table-page=${page + 1}`);   
                          table.setPageIndex(page);
                        }
                      }}
                    className="border-2 p-2 rounded-xl w-12"
                />
                </span>
            </footer>
        </>
    )
}