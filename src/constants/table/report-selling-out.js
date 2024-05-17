'use client'

const { createColumnHelper } = require("@tanstack/react-table")
import { FaSort } from "react-icons/fa";

const columnHelper = createColumnHelper()



export const defaultData = [
    {
        kdBrgDg : 1, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 2, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 3, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 4, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 5, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 6, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 7, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 8, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
    {
        kdBrgDg : 9, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: 0,        
        kategori: 'Sport',
        qtyJual : 100,
        total : 50
    },
  ]

export const columns = [
  columnHelper.accessor('kdBrgDg', {
    header : () => <span className="flex items-center text-center mx-auto gap-x-3">KD BRGDG <FaSort /></span>,
    cell: info => <h1 className="text-center mx-auto">{info.getValue()}</h1>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.namaBarang, {
    id: 'namaBarang',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span className="flex items-center gap-x-3">Nama Barang <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('idDept', {
    header: () => <span className="flex items-center gap-x-3">ID Dept <FaSort /></span>,
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('kl', {
    header: () => <span className="flex items-center gap-x-3">KL <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('kategori', {
    header: <span className="flex items-center gap-x-3">Kategori <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('qtyJual', {
    header: <span className="flex items-center gap-x-3">Qty Jual <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('total', {
    header: <span className="flex items-center gap-x-3">Total <FaSort /></span>,
    footer: info => info.column.id,
  })
]