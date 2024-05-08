'use client'

import { cn } from '@/lib/cn'
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { useState } from 'react'
import { WithPagination } from './WithPagination'


export const Table = ({
    columns,
    defaultData,
    rowClassName,
    headerClassName,
    pagination
}) => {
    const [data, _setData] = useState([...defaultData])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel()
    })

    return (
        <div className="bg-white rounded-xl drop-shadow-sm h-5/6">
            <table className='w-full'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th 
                                key={header.id}
                                className={cn('py-5 font-semibold text-start px-6 bg-opacity-10 text-gray-800 bg-white', headerClassName)}>
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
                            'border-b-gray-200 border-b text-gray-500 font-medium',
                            'hover:bg-blue-100 hover:text-black',
                            rowClassName
                        )}
                        key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td 
                                className={cn('p-7')}                                
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
    )
}