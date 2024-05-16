'use client'

const { createColumnHelper } = require("@tanstack/react-table")

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
  ]

export const columns = [
  columnHelper.accessor('kdCab', {
    header : () => <span>Kd Cab </span>,
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.namaCabang, {
    id: 'namaCabang',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Nama Cabang</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('stock', {
    header: () => 'Stock',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('jatahHariIni', {
    header: () => <span>Jatah Hari Ini</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('tanggal', {
    header: 'Tanggal',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('noTelp', {
    header: 'No Telepon',
    footer: info => info.column.id,
  })
]