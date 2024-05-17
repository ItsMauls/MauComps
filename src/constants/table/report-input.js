'use client'
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper()

export const data = [
    {
      tglPeriode: '000001',
      tipeLaporan: 'I35Y PREMIUM C. BROWN HAIR...',
      principal: '40',
      distributor: '40',
      action: 'A'
    },
  ]
  const periods = [
    { value: '', label: 'Pilih Periode' },
    { value: '1', label: 'Periode 1' },
    { value: '2', label: 'Periode 2' },
    // ...
  ];
  
  const reportTypes = [
    { value: '', label: 'Rekap' },
    { value: '1', label: 'Tipe 1' },
    { value: '2', label: 'Tipe 2' },
    // ...
  ];
  
  const factories = [
    { value: '', label: 'Semua' },
    { value: '1', label: 'principal 1' },
    { value: '2', label: 'principal 2' },
    // ...
  ];

  const distributor = [
    { value: '', label: 'Semua' },
    { value: '1', label: 'distributor 1' },
    { value: '2', label: 'distributor 2' },
    // ...
  ];

  export const columns = [
    columnHelper.accessor('tglPeriode', {
      header: () => <span className="flex items-center text-center mx-auto gap-x-3">Tanggal Periode</span>,
      cell: info => (
        <select
          defaultValue=""
          className="block w-full bg-white p-4 text-sm placeholder:text-gray-900 select-padding border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
        >
          {periods.map(period => (
            <option key={period.value} value={period.value}>{period.label}</option>
          ))}
        </select>
      ),
    }),
    columnHelper.accessor(row => row.tipeLaporan, {
      id: 'tipeLaporan',
      cell: info => (
        <select
          defaultValue=""
          className="block w-full bg-white p-4 text-sm placeholder:text-gray-900 select-padding border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
        >
          {reportTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      ),
      header: () => <span className="flex items-center gap-x-3">Tipe Laporan</span>,
    }),
    columnHelper.accessor('principal', {
      header: () => <span className="flex items-center gap-x-3">Principal</span>,
      cell: info => (
        <select
          defaultValue=""
          className="block w-full bg-white p-4 text-sm placeholder:text-gray-900 select-padding border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
        >
          {factories.map(factory => (
            <option key={factory.value} value={factory.value}>{factory.label}</option>
          ))}
        </select>
      ),
    }),
    columnHelper.accessor('distributor', {
      header: () => <span className="flex items-center gap-x-3">Distributor</span>,
      cell: info => (
        <select
          defaultValue=""
          className="block w-full bg-white p-4 text-sm placeholder:text-gray-900 select-padding border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
        >
          {distributor.map(factory => (
            <option key={factory.value} value={factory.value}>{factory.label}</option>
          ))}
        </select>
      ),
    }),
    columnHelper.accessor('action', {
      header: () => <span className="flex items-center gap-x-3">Action</span>,
      cell: info => <button className="bg-blue-600 text-white p-2 px-4 rounded-lg">Tampilkan</button>,
    }),
  ];