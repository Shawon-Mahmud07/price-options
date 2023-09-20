import { useState } from "react";
import Link from "./Link/Link";
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";

const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];
  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="md:bg-blue-500  py-2 ">
      <div
        className="md:hidden text-2xl"
        onClick={() => {
          handleClickMenu();
        }}
      >
        {open === true ? (
          <HiXMark className="text-5xl"></HiXMark>
        ) : (
          <HiBars3CenterLeft className="text-5xl"></HiBars3CenterLeft>
        )}
      </div>
      <ul
        className={`md:flex absolute duration-1000 ${
          open === true ? "left-2 " : "-left-36"
        }  md:static justify-end`}
      >
        {routes.map((route, index) => (
          <Link key={index} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
