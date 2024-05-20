'use client'

import { cn } from '@/lib/cn'
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { useState } from 'react'
import { WithPagination } from './WithPagination'
import { SearchBar } from '../ui/Searchbar'
import { CiSearch } from 'react-icons/ci'
import { Limiter } from '../limiter'
import DateRangeSelector from './DateRangePicker'
import { Button } from '../ui/Button'
import { GoDownload } from 'react-icons/go'
import { GiSettingsKnobs } from "react-icons/gi";


export const Table = ({
    columns,
    defaultData,
    rowClassName,
    headerClassName,
    pagination,
    withSearchBar,
    searchBarClassName,
    tableClassName,
    limiter,
    searchBarPlaceholder,
    sortByDate,
    exportButton,
    exportButtClassName,
    sortByDateDefaultStyle,
    filter,
    customRightButton,
    customRightButtonLabel
}) => {
    const [data, _setData] = useState([...defaultData])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel()
    })

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                        {withSearchBar &&
                                <SearchBar
                                    leftIcon={<CiSearch className="text-2xl" />}
                                    rightIcon={<div className="border border-gray-300 font-semibold px-1 rounded-md">\</div>}
                                    className={cn("w-[410px] px-4 border-2 my-4 border-gray-100 font-normal", searchBarClassName)}
                                    id="barcodeInput"
                                    placeholder={searchBarPlaceholder}
                                /> }
                                {sortByDate && <DateRangeSelector defaultStyle={sortByDateDefaultStyle}/>}
                                {filter && <Button className={'bg-white border text-gray-600 font-medium border-gray-300 py-2 px-4'}> <GiSettingsKnobs /> Filters </Button>}
                        </div>
                        <div className='flex gap-x-5'>
                            {limiter && <Limiter />}
                            {exportButton && <Button icon={<GoDownload />} className={cn('bg-teal-600 hover:bg-teal-700 text-white', exportButtClassName)}>Export</Button>}
                            {customRightButton && <Button className={cn('bg-teal-600 hover:bg-teal-700 text-white', exportButtClassName)}>{customRightButtonLabel}</Button>}
                        </div>
            </div>
            <div className={cn("bg-white rounded-xl drop-shadow-sm", tableClassName)} >

                <table className='w-full'>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th 
                                    key={header.id}
                                    className={cn('py-5 font-semibold mx-auto text-start px-6 text-gray-800 bg-white', headerClassName)}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map((row, idx) => (
                        <tr 
                            className={cn(idx % 2 === 0 ? 'bg-gray-50' : 'bg-white',
                                'border-b-gray-200 border-b text-gray-500 ',
                                rowClassName
                            )}
                            key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td 
                                    className={cn('p-4')}                                
                                    key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {pagination && <WithPagination table={table}/>}
            </div>
        </>
    )
}

