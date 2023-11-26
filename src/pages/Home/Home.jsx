/** @format */
import { Banner, Gallery, Hero, Intro, Laurels, TopProduct } from "./sections";
import items from "../../assets/images/Item";
import { motion, useScroll } from "framer-motion";
import { Footer, ProgressBar } from "../../components";
import { PRODUCTS as foodItem } from "../../assets/data";
const Home = () => {
    const { scrollY, scrollYProgress } = useScroll();
    return (
        <>
            <div>
                <div className="flex flex-col">
                    <Hero foodItem={foodItem} />
                    <TopProduct foodItem={foodItem} />
                    <Banner scrollY={scrollY} />
                    <Intro />
                    <Laurels />
                    <Gallery />
                </div>
                <Footer />
            </div>
            <motion.img
                src={items[1]}
                alt="item1"
                className="fixed bottom-0 left-10 -z-10"
                initial={{ filter: "blur(40px)", scale: 0.5 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.img
                src={items[2]}
                alt="item2"
                className="fixed top-0 left-2/3 -z-50"
                initial={{ filter: "blur(40px)", scale: 0.5, rotateZ: 180 }}
                animate={{ filter: "blur(0px)", scale: 1, rotateZ: 90 }}
                transition={{ duration: 1 }}
            />
            <motion.img
                src={items[2]}
                alt="item2"
                className="fixed top-1/3 left-1/4 -z-50"
                initial={{ filter: "blur(40px)", scale: 0.5 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.img
                src={items[3]}
                alt="item3"
                className="fixed top-0 left-0 -z-50"
                initial={{ filter: "blur(40px)", scale: 0.5 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.img
                src={items[4]}
                alt="item4"
                className="fixed top-1/2  -right-20 -z-50"
                initial={{ filter: "blur(40px)", scale: 0.5 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.img
                src={items[0]}
                alt="item5"
                className="fixed top-1/2 left-[15%] -translate-y-1/2 -z-50"
                initial={{ filter: "blur(40px)", scale: 0.5 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
            />
            <ProgressBar scrollYProgress={scrollYProgress} />
        </>
    );
};

export default Home;
