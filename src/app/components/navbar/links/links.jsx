import React from "react";
import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className="mx-10 border rounded-md p-2 hover:border-2"
        >
          {" "}
          {link.title}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Links;
