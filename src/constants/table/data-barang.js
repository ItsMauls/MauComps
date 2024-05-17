'use client'

const { createColumnHelper } = require("@tanstack/react-table")
import { FaSort } from "react-icons/fa";

const columnHelper = createColumnHelper()

export const defaultData = [
    {
        kdCab : 1, 
        namaCabang: 'Apotek Roxy Biak',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 2, 
        namaCabang: 'Apotek Roxy Perwira',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 3, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 4, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 5, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 6, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 7, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 8, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
    {
        kdCab : 9, 
        namaCabang: 'Apotek Roxy Juanda',
        stock: 0,
        jatahHariIni: 0,        
        tanggal: '2024-05-03',
        noTelp : 100
    },
  ]

export const columns = [
  columnHelper.accessor('kdCab', {
    header : () => <span className="flex items-center text-center mx-auto gap-x-3">Kd Cab <FaSort /></span>,
    cell: info => <h1 className="text-center mx-auto">{info.getValue()}</h1>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.namaCabang, {
    id: 'namaCabang',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span className="flex items-center gap-x-3">Nama Cabang <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('stock', {
    header: () => <span className="flex items-center gap-x-3">Stock <FaSort /></span>,
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('jatahHariIni', {
    header: () => <span className="flex items-center gap-x-3">Jatah Hari Ini <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('tanggal', {
    header: <span className="flex items-center gap-x-3">Tanggal <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('noTelp', {
    header: <span className="flex items-center gap-x-3">No Telepon <FaSort /></span>,
    footer: info => info.column.id,
  })
]