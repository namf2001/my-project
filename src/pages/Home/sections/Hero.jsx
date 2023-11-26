/** @format */

import { Button } from "../../../components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { useEffect, useState } from "react";

import propTypes from "prop-types";
import { motion } from "framer-motion";

const Hero = ({ foodItem }) => {
    const [heroImg, setHeroImg] = useState([]);
    useEffect(() => {
        setHeroImg(foodItem.slice(0, 5));
    }, [foodItem]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mt-10 px-6">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-center sm:text-7xl text-5xl font-['DM_Serif_Display'] text-white dark:text-black">
                    <span className="text-primary-color">Finally,</span> the
                    dish you have been <br></br>waiting for on your table
                </h1>
                <p className="text-center max-w-lg font-['Barlow_Condensed'] text-gray-200 dark:text-slate-600">
                    Chào mừng quý khách đến với nhà hàng chúng tôi. Chúng tôi
                    rất vui mừng được phục vụ và hy vọng quý khách sẽ có một
                    trải nghiệm ẩm thực thú vị tại đây.
                </p>
                <div className="w-48 relative group">
                    <Button btnText="Đặt bàn ngay" btnRounded="rounded-full" />
                    <div className="absolute w-full h-full bg-primary-color animate-ping top-0 rounded-full group-hover:animate-none -z-10"></div>
                </div>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={
                    {
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }
                }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="imgSwiper mx-auto grid items-start sm:max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-4 sm:py-6 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">
                {heroImg.map((heroItem) => (
                    <SwiperSlide
                        key={heroItem.id}
                        className="sm:max-w-sm w-full items-start gap-y-2 rounded-full">
                        <img
                            src={heroItem.image}
                            alt="img"
                            className="rounded-full object-contain w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

Hero.propTypes = {
    foodItem: propTypes.array.isRequired,
};

export default Hero;
