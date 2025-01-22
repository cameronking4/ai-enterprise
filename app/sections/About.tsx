import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"ReAct agents collaborating with each other 24/7 in the cloud."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Introducing the AI Enterprise Framework, a cutting-edge cloud-native system where AI agents work together like a fully operational enterprise—collaborating, communicating, and driving business goals 24/7. Each AI agent, from developers to sales managers, operates autonomously within its role, using enterprise messaging platforms like Slack and Discord to coordinate tasks, analyze data, and optimize workflows." />

                        <AnimatedBody
                            delay={0.1}
                            text="Powered by the Model Context Protocol (MCP), an open standard that enables secure, two-way connections between AI assistants and data sources, these agents are equipped with specialized tools and resources to ensure seamless operations—from infrastructure management and financial forecasting to lead generation and campaign analysis. The framework offers a scalable, resilient, and secure environment that integrates with your existing enterprise stack, delivering automated insights and accelerating decision-making."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="This robust platform empowers you to create and manage your own blog, magazine, SaaS application, marketplace, or any platform of your choice. By integrating built-in goal and task management, cross-functional collaboration, and real-time analytics, the agents work seamlessly to optimize your workflows, automate complex tasks, and deliver actionable insights. The AI Enterprise Framework provides the world's first implementation of an fully autonomous, self-healing, AI powered enterprise."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
