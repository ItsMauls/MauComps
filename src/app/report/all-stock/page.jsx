import { PriceCard } from "@/components/cards/price-card";
import { Table } from "@/components/table";
import { menuCard } from "@/constants";
import { columns, defaultData } from "@/constants/table/data-barang";

export default function AllStock() {
    return (
        <>
        <h1 className="text-xl font-medium my-2">137793 - 135Y PREMIUM C.BROWN HAIR 30ML****</h1>
        <PriceCard 
            data={menuCard}/>
            <Table
                searchBarPlaceholder={"Cari atau Input Barcode disini"}
                searchBarClassName={'text-gray-500'}
                tableClassName={'h-5/6'}
                withSearchBar
                defaultData={defaultData}
                columns={columns}
                pagination
                limiter
            />
        </>
    )
}