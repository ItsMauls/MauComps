import { Notifications } from "./Notifications";
import { UserProfile } from "./UserProfile";

import { LeftSection } from "./LeftSection";

export const Navbar = () => {
    return (
      <nav className="py-4 px-8 sticky top-0 z-10 flex justify-between items-center">
        <div className="flex items-center">
          <LeftSection />
        </div>
        <div className="flex items-center space-x-4">
          <Notifications />
          <UserProfile />
        </div>
      </nav>
    );
  };