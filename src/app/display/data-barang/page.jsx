import { Table } from "@/components/table";
import { SearchBar } from "@/components/ui/Searchbar";
import { columns, defaultData } from "@/constants/table/data-barang";
import { CiSearch } from "react-icons/ci";

export default function DataBarang() {
    
    return (
        <>
            <SearchBar
                leftIcon={<CiSearch className="text-2xl" />}
                rightIcon={<div className="border border-gray-300 font-semibold px-1 rounded-md">\</div>}
                className="w-[410px] px-4 my-4 border-2 border-gray-200 font-normal"
                id="barcodeInput"
                placeholder="Cari atau Input Barcode disini"
            /> 
            <Table 
                pagination
                defaultData={defaultData}
                columns={columns}
            />
        </>
    )
}