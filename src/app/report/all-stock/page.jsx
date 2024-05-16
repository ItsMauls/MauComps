import { PriceCard } from "@/components/cards/price-card";
import { Table } from "@/components/table";
import { menuCard } from "@/constants";
import { columns, defaultData } from "@/constants/table/data-barang";

export default function AllStock() {
    return (
        <>
        <h1 className="text-xl font-medium my-1">137793 - 135Y PREMIUM C.BROWN HAIR 30ML****</h1>
        <PriceCard data={menuCard}/>
            <Table
                searchBarClassName={'text-gray-500'}
                withSearchBar
                defaultData={defaultData}
                columns={columns}
                pagination
            />
        </>
    )
}