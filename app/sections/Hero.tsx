import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";


const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >                 
                    <AnimatedTitle
                        text={"ai enterprise framework"}
                        className={
                            "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-8 flex h-[60px] w-[30px] cursor-pointer items-center justify-center rounded-full border-2 border-[#e4ded7]"
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth"
                            });
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="h-3 w-1 rounded-full bg-[#e4ded7]"
                        />
                    </motion.div>
                </div>
                
            </div>
        </motion.section>
    );
};

export default Hero;
