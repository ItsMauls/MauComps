import { FaNewspaper, FaShoppingCart, FaWallet } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";

export const menu = [
    {
        name : 'Dashboard',
        link : '/dashboard',
        subMenu : [],
        logo : <MdSpaceDashboard />,
    },
    {
        name : 'Display',
        link : '/display',
        logo : <RiInboxArchiveFill />,
        
        subMenu : [
            {
                name : 'Data Barang',
                link : '/data-barang'
            },
            {
                name : 'Master Departemen',
                link : '/master-departemen'
            }
        ]
    },
    {
        name : 'Laporan',
        link : '/laporan',
        logo : <FaNewspaper />,
        subMenu : [
            {
                name : 'Penjualan Barang',
                link : '/penjualan-barang'
            },
            {
                name : 'Penjualan Barang Tertentu',
                link : '/penjualan-barang-tertentu'
            },
            {
                name : 'Pembelian Barang',
                link : '/pembelian-barang'
            },
            {
                name : 'Tidak Ada Penjualan',
                link : '/tidak-ada-penjualan'
            },
        ]
    },
    {
        name : 'Transaksi',
        link : '/transaksi',
        logo : <FaWallet />,
        subMenu : [
            {
                name : 'Data Barang',
                link : '/data-barang'
            },
            {
                name : 'Master Departemen',
                link : '/master-departemen'
            }
        ]
    },
    {
        name : 'HO System',
        link : '/ho-system',
        logo : <FaClipboardUser />,
        subMenu : [
            {
                name : 'Data Barang',
                link : '/data-barang'
            },
            {
                name : 'Master Departemen',
                link : '/master-departemen'
            }
        ]
    },
    {
        name : 'Service Level',
        link : '/service-level',
        logo : <FaShoppingCart />,
        subMenu : [
            {
                name : 'Data Barang',
                link : '/data-barang'
            },
            {
                name : 'Master Departemen',
                link : '/master-departemen'
            }
        ]
    },
]