import { FaSearch } from "react-icons/fa";
import { SearchBar } from "../ui/Searchbar";
import { CiSearch } from "react-icons/ci";
import { Notifications } from "./Notifications";
import { UserProfile } from "./UserProfile";

export const Navbar = () => {
    return (
      <nav className="py-4 px-8 sticky top-0 z-10 flex justify-between items-center">
        <div className="flex items-center">
          <SearchBar
            leftIcon={<CiSearch className="text-2xl" />}
            rightIcon={<div className="border border-gray-300 font-semibold px-1 rounded-md">\</div>}
            className="w-[410px] border-2 border-gray-200 font-medium"
            id="navbarSearch"
            placeholder="Cari No.Bon atau No.Transaksi disini"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Notifications />
          <UserProfile />
        </div>
      </nav>
    );
  };