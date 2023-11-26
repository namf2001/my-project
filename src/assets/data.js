/** @format */
import award01 from "./images/award01.png";
import award02 from "./images/award02.png";
import award03 from "./images/award03.png";
import award05 from "./images/award05.png";
import Cheesecake from "./images/Cheesecake.png";
import BBQRibs from "./images/BBQRibs.png";
import Icream from "./images/icream.png";
import Pizza from "./images/Pizza.png";
import Salad from "./images/Salad.png";
import { TbDiscount2 } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { BiHomeAlt2, BiAt } from "react-icons/bi";
import { AiFillContacts } from "react-icons/ai";

export const MENU_ITEMS = [
    {
        name: "Home",
        path: "/",
        icon: BiHomeAlt2,
    },
    {
        name: "Discount",
        path: "/discount",
        icon: TbDiscount2,
    },
    {
        name: "Reservation",
        path: "/reservation",
        icon: BiAt,
    },
    {
        name: "Contact",
        path: "/contact",
        icon: AiFillContacts,
    },
    {
        name: "Main",
        path: "/main",
        icon: FiShoppingBag,
    },
];
export const awards = [
    {
        imageUrl: award02,
        title: "Bib Gourmond",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        imageUrl: award01,
        title: "Rising Star",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        imageUrl: award05,
        title: "AA Hospitality",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        imageUrl: award03,
        title: "Outstanding Chef",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
];

export const PRODUCTS = [
    {
        id: 1,  
        name: "Cheesecake",
        price: 10,
        image: Cheesecake,
        discount: 50,
    },
    {
        id: 2,
        name: "BBQ Ribs",
        price: 20,
        image: BBQRibs,
        discount: 50,
    },
    {
        id: 3,
        name: "Icream",
        price: 30,
        image: Icream,
        discount: 50,
    },
    {
        id: 4,
        name: "Pizza",
        price: 40,
        image: Pizza,
        discount: 50,
    },
    {
        id: 5,
        name: "Salad",
        price: 50,
        image: Salad,
        discount: 50,
    },
];
