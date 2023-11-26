/** @format */
import { NavLink } from "react-router-dom";
import { MENU_ITEMS as links } from "../assets/data";
import { motion } from "framer-motion";
const Navbar = () => {
        const sidebarVariants = {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
        };
    return (
        <div className="fixed bottom-0 right-0 left-0 bg-base/dark-bg-2-14 h-[70px] z-50">
            <ul className="flex justify-between items-center max-w-[100vw] h-full px-3">
                {links.map((link, index) => {
                    const { name, path } = link;
                    const Icon = link.icon;
                    return (
                        <motion.li
                            key={name}
                            className="text-primary-color relative"
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                            }}>
                            <NavLink
                                to={path}
                                activeclassname="active"
                                className="text-xl flex justify-center items-center sidebar">
                                <span className="p-4 hover:drop-shadow-3xl hover:scale-110 transition-all">
                                    <Icon />
                                </span>
                            </NavLink>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
