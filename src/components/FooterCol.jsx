/** @format */

import { Link } from "react-router-dom";
import propTypes from "prop-types";

const FooterCol = ({
    heading = "col heading",
    links = [
        {
            type: "link",
            text: "Home",
            path: "/home",
        },
        {
            type: "link",
            text: "About",
            path: "/about",
        },
        {
            type: "link",
            text: "Projects",
            path: "/projects",
        },
        {
            type: "link",
            text: "Contact",
            path: "/contact",
        },
    ],
}) => {
    return (
        <div>
            <h1 className="text-lg sm:text-2xl mb-2 sm:mb-8 text-gray-400 dark:text-slate-600 font-semibold">{heading}</h1>
            <ul className="text-gray-400 dark:text-slate-600">
                {links.map((link) => {
                    return (
                        <li key={link.path} className="mb-1 sm:mb-4">
                            {link.type === "link" ? (
                                <Link
                                    to={link.path}
                                    className="hover:text-primary-color transition-all duration-300 text-xs sm:text-base">
                                    {link.text}
                                </Link>
                            ) : (
                                <a
                                    href={link.path}
                                    target="_blank"
                                    className="hover:text-primary-color transition-all duration-300 text-xs sm:text-base"
                                    rel="noopener noreferrer">
                                    {link.text}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

FooterCol.propTypes = {
    heading: propTypes.string,
    links: propTypes.array,
};

export default FooterCol;
