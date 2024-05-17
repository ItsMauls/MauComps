
import { Table } from "@/components/table";
import { columns, defaultData } from "@/constants/table/report-selling-out";
import { columns as inputColumns, data } from "@/constants/table/report-input";
import { CiSearch } from "react-icons/ci";
import { SearchBar } from "@/components/ui/Searchbar";
import DateRangeSelector from "@/components/table/DateRangePicker";
import { Button } from "@/components/ui/Button";
import { GoDownload } from "react-icons/go";

export default function SellingOut() {
    return (
        <>
            <Table
                headerClassName={'my-2 text-white bg-opacity-0 rounded-t-sm font-medium text-sm'}
                tableClassName={'my-4 rounded-2xl bg-blue-600'}
                rowClassName={'bg-white'}
                columns={inputColumns}
                defaultData={data}
            />
            <div className="flex items-center gap-x-4">
                <DateRangeSelector />
                <SearchBar
                    leftIcon={<CiSearch className="text-xl" />}
                    rightIcon={<div className="border border-gray-300 font-semibold px-1 rounded-md">\</div>}
                    className={("text-gray-500 w-[225px] px-2 border-2 my-4 border-gray-100 font-normal")}
                    inputClassName={'py-1'}
                    id="barcodeInput"
                    placeholder={'Cari Disini'}
                /> 
                <Button icon={<GoDownload />} className="ml-auto bg-teal-600 hover:bg-teal-700 text-white">Export</Button>
            </div>
            <Table
                tableClassName={'h-5/6'}
                headerClassName={'bg-opacity-10'}
                defaultData={defaultData}
                columns={columns}
                pagination
                />
        </>
    )
}