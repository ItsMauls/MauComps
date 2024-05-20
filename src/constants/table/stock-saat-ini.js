'use client'

const { createColumnHelper } = require("@tanstack/react-table")
import { FaSort } from "react-icons/fa";

const columnHelper = createColumnHelper()



export const defaultData = [
    {
        kdBrgDg : 1, 
        namaBarang: 'SANGOBION',
        idDept: 0,
        kl: "A",        
        qbbs : 30,
        jenisDept : 'ETHICAL',
        kategori : "HIPERTENSI",
        isi : 30,        
        totalStock : 375,
        oos: 24
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
  columnHelper.accessor('qbbs', {
    header: () => <span className="flex items-center gap-x-3">QBBS <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('jenisDept', {
    header: () => <span className="flex items-center gap-x-3">Jenis Dept <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('kategori', {
    header: () => <span className="flex items-center gap-x-3">Kategori <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('isi', {
    header: () => <span className="flex items-center gap-x-3">Isi <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('totalStock', {
    header: () => <span className="flex items-center gap-x-3">Total Stock <FaSort /></span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('oos', {
    header: () => <span className="flex items-center gap-x-3">OOS <FaSort /></span>,
    footer: info => info.column.id,
  })
]