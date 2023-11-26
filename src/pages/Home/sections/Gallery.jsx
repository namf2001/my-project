/** @format */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort,
} from "react-icons/bs";
import gallery01 from "../../../assets/images/gallery01.png";
import gallery02 from "../../../assets/images/gallery02.png";
import gallery03 from "../../../assets/images/gallery03.png";
import gallery04 from "../../../assets/images/gallery04.png";
import { Button } from "../../../components";

const Gallery = () => {
    return (
        <div className="mx-auto py-16 flex flex-col gap-4 sm:flex-row sm:gap-0 justify-center sm:max-w-screen-xl px-6">
            <div className="flex-1 sm:min-w-[500px] pr-8 items-start">
                <h1 className="text-2xl sm:text-7xl font-['DM_Serif_Display']">
                    Giải thưởng
                </h1>
                <p className="max-w-lg font-['Barlow_Condensed'] text-slate-900 my-4">
                    Chào mừng quý khách đến với nhà hàng chúng tôi. Chúng tôi
                    rất vui mừng được phục vụ và hy vọng quý khách sẽ có một
                    trải nghiệm ẩm thực thú vị tại đây.
                </p>
                <div className="w-1/2 sm:w-1/2 mx-auto sm:mx-0">
                    <Button
                        btnText="Xem thêm"
                        btnRounded="rounded-full"
                        outline
                    />
                </div>
            </div>
            <div className="app__gallery-images flex-1 flex w-[80vw] sm:max-w-1/2 relative p-2 border-2 border-primary-color mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
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
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="${className} bg-primary-color"></span>`;
                        },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="flex items-center ">
                    {[
                        gallery01,
                        gallery02,
                        gallery03,
                        gallery04,
                        gallery04,
                    ].map((image, index) => (
                        <SwiperSlide
                            className=" h-[400px] mr-8 flex justify-center items-center transition duration-500 group"
                            key={`gallery_image-${index + 1}`}>
                            <img
                                src={image}
                                alt="gallery_image"
                                className="w-full h-full object-cover opacity-100 transition duration-500 group-hover:opacity-40"
                            />
                            <BsInstagram className="absolute text-white text-3xl opacity-0 group-hover:opacity-100" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="app__gallery-images_arrows absolute bottom-[10%] right-0 w-full">
                    <BsArrowLeftShort className="text-primary-color text-2xl cursor-pointer bg-base/dark-line w-10 h-10 rounded  swiper-button-prev" />
                    <BsArrowRightShort className="text-primary-color text-2xl cursor-pointer bg-base/dark-line w-10 h-10 rounded  swiper-button-next" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
