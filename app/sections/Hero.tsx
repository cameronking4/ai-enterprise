import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import { FollowPointer } from "../components/cursor";

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
          {[
            { title: "Sales Representative", baseX: -160, baseY: 80 },
            { title: "Customer Support", baseX: -450, baseY: 160 },
            { title: "Product Manager", baseX: -70, baseY: 220 },
            { title: "Marketing Specialist", baseX: 500, baseY: 190 },
            { title: "Data Analyst", baseX: 400, baseY: 240 },
            { title: "Web Researcher", baseX: 70, baseY: 100 },
            { title: "Software Engineer", baseX: 650, baseY: 180 },
            { title: "Operations Manager", baseX: 750, baseY: 230 },
            { title: "Financial Advisor", baseX: -550, baseY: 90 },
            { title: "DevOps Engineer", baseX: -350, baseY: 200 },
            { title: "Business Analyst", baseX: -800, baseY: 140 },
            { title: "UX Designer", baseX: 550, baseY: 120 },
            { title: "Content Strategist", baseX: -650, baseY: 190 },
            { title: "AI Engineer", baseX: 450, baseY: 110 },
            { title: "Technical Writer", baseX: -200, baseY: 150 },
            { title: "QA Engineer", baseX: 600, baseY: 90 },
            { title: "Systems Architect", baseX: -500, baseY: 210 },
            { title: "Cloud Engineer", baseX: 700, baseY: 130 },
            { title: "Data Scientist", baseX: -300, baseY: 170 },
            { title: "Security Analyst", baseX: 50, baseY: 180 },
            { title: "Network Engineer", baseX: 350, baseY: 220 },
            { title: "Project Manager", baseX: -75, baseY: 110 },
            { title: "Database Admin", baseX: 50, baseY: 200 },
            { title: "ML Engineer", baseX: -600, baseY: 120 },
            { title: "Frontend Developer", baseX: 200, baseY: 140 },
            { title: "Backend Developer", baseX: -850, baseY: 190 },
            { title: "Full Stack Developer", baseX: 450, baseY: 160 },
            { title: "Solutions Architect", baseX: -700, baseY: 170 },
          ].map((item, i) => {
            const offset = Math.sin(Date.now() / 1000 + i) * 30;
            const verticalOffset = Math.cos(Date.now() / 1500 + i) * 30;
            return (
              <motion.div
                key={item.title}
                animate={{
                  x: [item.baseX - offset, item.baseX + offset],
                  y: [item.baseY - verticalOffset, item.baseY + verticalOffset],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2 + Math.random() * 2,
                  ease: "easeInOut",
                }}
              >
                <FollowPointer x={0} y={0} title={item.title} />
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 flex h-[60px] w-[30px] cursor-pointer items-center justify-center rounded-full border-2 border-[#e4ded7]"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
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
