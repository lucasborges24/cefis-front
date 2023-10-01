import Link from "next/link";
import DropdownUser from "./dropdown-user";
import Image from "next/image";
import { Menu } from "lucide-react";
import LogoCefisNew from "assets/images/logo-cefis-gray-50-50.png";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  userName: string | undefined;
  role: string | undefined;
}) => {
  return (
    <header className="sticky top-0 z-[99999] flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none shadow-lg shadow-gray-500/40">
      <div className="flex flex-grow items-center justify-between lg:justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <Menu />
          </button>
        </div>
        <div>
          <Link className="block flex-shrink-0 lg:hidden" href="/dashboard">
            <Image width={45} height={45} src={LogoCefisNew} alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4"></ul>

          <DropdownUser username={props.userName} role={props.role} />
        </div>
      </div>
    </header>
  );
};

export default Header;
