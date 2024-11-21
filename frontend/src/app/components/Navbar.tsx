import { BrandImage } from "@/assets/landing-page";
import { roboto } from "../fonts";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const NavBar = (props: any) => (
  <nav
    className={`flex items-center justify-between px-4 lg:px-20
        xl:px-0 2xl:px-0 py-4 mb-12 container mx-auto font-roboto
        bg-[#1e1e1e]/80 backdrop-blur-sm sticky top-0 z-10
        lg:static lg:bg-none`}
    {...props}
  >
    <div className="flex items-center gap-14">
      <Link href="/">
        <div className="hidden md:block">
          <BrandImage />
        </div>
        <div className="md:hidden">
          <p className="text-textPrimary text-lg font-normal font-bowlby">
            ScanGuard
          </p>
        </div>
      </Link>
      <NavLinks />
    </div>
    <div>
      <ConnectWallet />
    </div>
  </nav>
);

const NavLinks = () => (
  <ul
    className={`${roboto.variable} text-sm text-textPrimary leading-normal
      font-roboto uppercase hidden py-3 gap-6 items-center lg:flex`}
  >
    {["home", "anout", "contact"].map((item, index, array) => (
      <li
        key={item}
        className={`${index !== array.length - 1 ? "border-r-2 border-primary/[.12] pr-6" : ""}
          `}
      >
        <Link href={`${item === "home" ? "/" : item}`}>{item}</Link>
      </li>
    ))}
  </ul>
);
export default NavBar;
