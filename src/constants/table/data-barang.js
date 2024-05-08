'use client'

const { createColumnHelper } = require("@tanstack/react-table")

const columnHelper = createColumnHelper()

export const defaultData = [
    {
        id : 1, 
        kdBrgDg: '133793',
        dept: 69,
        namaBarang: "Sangobion",        
        satuan: 'BOX',
        isi : 100,
        dept1: 69,
        qAkhir : 50,
        qExp : 0
    },
    {
        id : 2, 
        kdBrgDg: '133794',
        dept: 70,
        namaBarang: "AMLODIPHINE",
        satuan: 'BOX',
        isi : 100,
        dept1: 69,
        qAkhir : 50,
        qExp : 0
    },
    {
        id : 3, 
        kdBrgDg: '133795',
        dept: 71,
        namaBarang: "OBAT BATUK",
        satuan: 'BOX',
        isi : 100,
        dept1: 69,
        qAkhir : 50,
        qExp : 0
    },
  ]

export const columns = [
  columnHelper.accessor('id', {
    header : () => <span>No. </span>,
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.kdBrgDg, {
    id: 'kdBrgDg',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>KD.BRGDG</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('dept', {
    header: () => 'Dept',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('namaBarang', {
    header: () => <span>Nama Barang</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('dept1', {
    header: 'Dept',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('satuan', {
    header: 'Satuan',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('isi', {
    header: 'Isi',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('qAkhir', {
    header: 'Q Akhir',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('qExp', {
    header: 'Q EXP',
    footer: info => info.column.id,
  }),
]