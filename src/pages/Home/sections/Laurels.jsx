/** @format */

import propTypes from "prop-types";
import { awards } from "../../../assets/data";
import laurels from "../../../assets/images/laurels.png";
import bg from "../../../assets/images/bg.png";

const AwardCard = ({ award: { imageUrl, title, subtitle } }) => (
    <div className="flex-1 flex justify-start items-start min-w-[230px] m-4 sm:min-w-full sm:my-4 sm:mx-0 2xl:min-w-[390px]">
        <img src={imageUrl} alt="" className="w-12 h-12" />
        <div className="flex flex-col ml-4">
            <p className="text-white" style={{ color: "#DCCA87" }}>
                {title}
            </p>
            <p className="text-gray-400">{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => (
    <div className="relative dark:text-white flex flex-col sm:flex-row justify-between items-center px-8 sm:px-16 lg:px-16 xl:px-20 2xl:px-32 py-8 sm:py-16 lg:py-32 xl:py-40 2xl:py-52">
        <img
            src={bg}
            alt=""
            className="absolute top-0 left-0 right-0 h-full inset-0 -z-10"
        />
        <div className="flex-1 w-full flex justify-center items-start flex-col z-10">
            <div>
                <h1 className="sm:text-7xl text-2xl font-['DM_Serif_Display'] text-white">
                    Giải thưởng
                </h1>
                <p className="max-w-lg font-['Barlow_Condensed'] text-slate-100 mt-4">
                    Chào mừng quý khách đến với nhà hàng chúng tôi. Chúng tôi
                    rất vui mừng được phục vụ và hy vọng quý khách sẽ có một
                    trải nghiệm ẩm thực thú vị tại đây.
                </p>
            </div>
            <div className="flex justify-start items-center flex-wrap mt-8">
                {awards.map((award) => (
                    <AwardCard award={award} key={award.title} />
                ))}
            </div>
        </div>
        <div className="flex-1 w-full sm:flex justify-center items-center absolute -z-0 hidden">
            <img src={laurels} alt="laurels_img" />
        </div>
    </div>
);

AwardCard.propTypes = {
    award: propTypes.shape({
        imageUrl: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        subtitle: propTypes.string.isRequired,
    }),
};

export default Laurels;
