import { FaNewspaper } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BsClipboard2DataFill } from "react-icons/bs";

export const menu = [
    {
        name : 'Dashboard',
        link : '/dashboard',
        subMenu : [],
        logo : <MdSpaceDashboard />,
    },
    {
        name : 'Data Mapping',
        link : '/data-mapping',
        logo : <BsClipboard2DataFill />,
        subMenu : []
    },
    {
        name : 'Report',
        link : '/report',
        logo : <FaNewspaper />,
        subMenu : [
            {
                name : 'All Stock',
                link : '/all-stock'
            },
            {
                name : 'Selling Out',
                link : '/selling-out'
            },
            {
                name : 'Stock Saat Ini',
                link : '/stock-saat-ini'
            },
            {
                name : 'Stock Berjalan',
                link : '/stock-berjalan'
            },
        ]
    },
    {
        name : 'Master Data',
        link : '/master',
        logo : <FaClipboardUser />,
        subMenu : [
            {
                name : 'Master Role',
                link : '/role'
            },
            {
                name : 'Master User',
                link : '/user'
            }
        ]
    }
]