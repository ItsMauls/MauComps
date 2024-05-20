import { Table } from "@/components/table";
import { columns, defaultData } from "@/constants/table/stock-saat-ini";

export default function stockBackDate () {
    return (
        <Table 
            columns={columns}
            defaultData={defaultData}
            withSearchBar
            searchBarPlaceholder={'Cari item disini...'}
            searchBarClassName={'text-gray-500 !w-[300px]'}
            tableClassName={'h-5/6 shadow-sm'}
            headerClassName={'rounded-lg text-sm'}
            rowClassName={'text-sm'}
            limiter
            exportButton
            pagination
            sortByDateDefaultStyle
            sortByDate
            exportButtClassName={'py-1 text-sm px-4'}
        />
    )
}