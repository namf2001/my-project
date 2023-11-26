/**
 * @format
 */
import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";

const Product = (props) => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <motion.li
            className="flex flex-col justify-between items-center bg-base/dark-bg-2-14 dark:bg-light-bg-1 dark:text-dark rounded-2xl w-[192px] h-[273px] mt-[34px] lg:mt-[55px] p-4 lg:w-[230px] lg:h-[327px] z-10 relative product-hover hover:scale-95 hover:bg-base/dark-line duration-500 shadow-xl"
            variants={item}>
            <div className="mt-[-34px] lg:mt-[-50px] relative overflow-visible">
                {/* Sản phẩm */}
                <img
                    alt={props.name}
                    src={props.image}
                    className="product-img-1 left-50% w-[132px] h-[132px] lg:w-[160px] lg:h-[160px] object-cover sticky z-50 rounded-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="text-sm font-semibold text-center">
                    {props.name}
                </h3>
                <p className="text-sm font-light">$ {props.price}</p>
            </div>
            <div className="w-full">
                <Button btnText="Mua ngay" />
            </div>
            {props.discount > 0 && (
                <div className="absolute top-1/4 z-50 left-0 shadow-xl overflow-hidden bg-primary-color flex flex-col justify-center w-24 h-12 items-center rounded-e-lg">
                    <div className="text-center selection:font-semibold  text-white">
                        {props.discount}% off
                    </div>
                </div>
            )}
        </motion.li>
    );
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
};

export default Product;
