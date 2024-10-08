import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { useLocation, Link } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center text-sm text-gray-400 mt-2">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={index} className="flex items-center">
            {index !== 0 && (
                <>
             <span className="mx-2 text-white">{">>"}</span>
                </>
            )}

            {isLast ? (
              <span className="text-white text-lg font-switzer font-medium  capitalize">
                {value}
              </span>
            ) : (
              <Link
                to={to}
                className="text-white text-lg font-switzer font-medium capitalize"
              >
                {value}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
