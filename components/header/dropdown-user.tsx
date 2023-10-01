import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import UserAvatar from "./user-avatar";
import { ChevronDown, LogOut, PersonStanding } from "lucide-react";
import UserAvatarSkeleton from "./user-avatar-skeleton";
import { buildAlert } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

interface DropdownUserProps {
  username: string | undefined;
  role: string | undefined;
}

const DropdownUser = ({ username, role }: DropdownUserProps) => {
  const { signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const handleRole = (role: string | undefined) => {
    if (role === "student") {
      return "Aluno";
    } else if (role === "teacher") {
      return "Professor";
    } else {
      return "";
    }
  };

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        {role ? (
          <span className="hidden text-right lg:block">
            <span className="block text-xs">{handleRole(role)}</span>
          </span>
        ) : (
          <span className="w-12 text-right lg:block animate-pulse">
            <div className="block bg-gray-100 rounded-md h-4 mt-1"></div>
          </span>
        )}

        <span className="h-12 w-12 rounded-full">
          {username ? (
            <UserAvatar userName={username} />
          ) : (
            <UserAvatarSkeleton />
          )}
        </span>

        <div>
          <ChevronDown />
        </div>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary  lg:text-base"
              onClick={buildAlert}
            >
              <PersonStanding />
              Meu Perfil
            </Link>
          </li>
        </ul>
        <button
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          onClick={signOut}
        >
          <LogOut />
          Sair
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
