import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../public/pulse-logo.svg";

export function NavbarD() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        
        className="text-lg flex items-center gap-x-2 p-2 font-bold hover:text-black text-green-500"
      >
        <a href="#" className="flex items-center">
          Features
        </a>
      </Typography>
      <Typography
        as="li"
        
        className="text-lg flex items-center gap-x-2 p-2 font-bold hover:text-black text-green-500"
      >
        <a href="#" className="flex items-center">
          Customer Stories
        </a>
      </Typography>
      <Typography
        as="li"
        
        className="text-lg flex items-center gap-x-2 p-2 font-bold hover:text-black text-green-500"
      >
        <a href="#" className="flex items-center">
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        
        className="text-lg flex items-center gap-x-2 p-2 font-bold hover:text-black text-green-500"
      >
        <a href="#" className="flex items-center">
          Blog
        </a>
      </Typography>
      <Button className="text-lg bg-white px-3 py-1 font-semibold uppercase text-green-500 transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-4px_4px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Signup
      </Button>
    </ul>
  );

  return (
    <Navbar className="md:bg-green-50 w-full lg:p-16 md:py-5">
      <div className=" container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <img
          src={logo}
          alt="Logo"
          className="relative left-10 h-8"
          style={{ height: 50 }}
        />
        <div className="hidden md:flex flex-grow justify-end">{navList}</div>
        <div className="flex items-center gap-x-1">
  <IconButton
    variant="text"
    className="absolute right-10 mb-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
    ripple={false}
    onClick={() => setOpenNav(!openNav)}
  >
    {openNav ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-10 w-10 text-green-500" // Adjusted size
        viewBox="0 0 24 24" // Adjusted viewBox
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500" // Adjusted size
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        viewBox="0 0 24 24" // Adjusted viewBox
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </IconButton>
</div>

      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
