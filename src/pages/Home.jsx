"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { HeroSection } from "../components/ui/HeroSection";
import GradientText from "../components/ui/GradientText";
import { h1 } from "framer-motion/client";
import Calculator from "../components/ui/Calculator";
import KeyFeatures from "../components/ui/KeyFeatures";
import HowWorks from "../components/ui/HowWorks";
import Doc from "../components/ui/Doc"
import Examples from "../components/ui/Examples";
import FAQ from "../components/ui/FAQ";
import Footer from "../components/ui/Footer";
import { Link } from "react-scroll";


export function Home() {
    const calculatorRef = useRef(null);
    const workref = useRef(null);
    return (
        <>
            <HeroSection>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4">
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center ">
                        <GradientText dec="bg-gradient-to-b from-[#192942] to-[#27374E] text-transparent bg-clip-text pb-4">AI-powered
                        </GradientText>

                        <GradientText dec="bg-gradient-to-b from-[#2F3E54] to-[#3C4B5F] text-transparent bg-clip-text pb-4">
                            Time Complexity Analysis
                        </GradientText>
                        <p className="font-extralight md:text-2xl text-[#8798B3]">An intelligent tool that calculates the time complexity</p>
                        <p className="font-extralight md:text-2xl text-[#8798B3]">of your code, helping you optimize performance and write efficient algorithms.</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <Link to="calculator" smooth={true} duration={900}
                            className="flex bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 mx-3 py-2 hover:bg-black/80 hover:text-white cursor-pointer">
                            Try Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mx-1 my-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>

                        </Link>
                        <Link to="howworks" smooth={true} duration={900}
                            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:bg-black/80 hover:text-white cursor-pointer">
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </HeroSection>
            {/* After Hero Seciton */}
            <div className="border-b border-neutral-800 bg-neutral-900 flex justify-end h-[100vh]">
                <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0 ml-10 mt-40">
                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Master Algorithm Complexity
                        <br />
                        <span className="text-blue-500">In Minutes</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg">
                        Transform your code into precise complexity analysis. Understand performance, optimize algorithms, and write better code.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-6">
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm">Instant Analysis</span>
                        <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm">Multiple Languages</span>
                        <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm">Detailed Reports</span>
                    </div>

                </div>
                < div className="md:w-[40rem] animate__animated animate__fadeInRight mr-6 mt-40">
                    <img src="/images/TemplatesCode.png" className="rounded-xl" alt="" />
                </div >
            </div>
            {/* CALCULATOR */}
            <div id="calculator" ref={calculatorRef}>
                <Calculator />
            </div>
            <KeyFeatures />
            <div id="howworks" ref={workref}>
                <HowWorks />
            </div>

            <Doc />
            <Examples />
            <FAQ />
            <Footer />
        </>
    );
}
