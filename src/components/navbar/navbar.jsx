import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLink } from "../dropdown-menu-link";
import { User } from "lucide-react";

const Navbar = () => {
  const authItem = [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <div className="bg-yellow-500 min-h-16 py-4 px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">
            <Link href="/">Title</Link>
          </h1>
          <div>
            <ul className="flex items-center space-x-6">
              <li></li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/todo">Todo</Link>
              </li>
              <li>
                <Link href="/message">Message</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <DropdownMenuLink label={<User />} href="/products" items={authItem} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
