"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { reverse } from 'dns';
import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/PreethiChandran"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/preethi-chandran-80ab43190/"
    }
]


const HeroSection = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/preethi-portfolio/Preethi_CV_IND.pdf'; // Path to your PDF in the public folder
        link.download = 'Preethi_C_CV.pdf'; // Suggested file name
        link.click();
    };
    return (

        <section className='h-full'>
            <div className='container mx-auto h-full'>
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <h1 className='text-white mb-6  text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                            <span>
                                Hello, I'm{" "}
                            </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Preethi',
                                    1000,
                                    'Frontend Developer',
                                    1000,
                                    'React.js Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={false}
                                className="text-secondary"
                            />
                        </h1>
                        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                            Experienced in creating scalable applications and optimizing user experiences across platforms. Committed to excellence and driven by a passion for learning and innovation.
                        </p>
                        <div className='flex flex-col xl:flex-row items-center gap-8'>
                            <Button variant={'outline'} size={'lg'} className='uppercase flex items-center gap-2' onClick={handleDownload} >

                                <span>Get My CV</span>
                                <FiDownload className='text-xl' />

                            </Button>

                            <div className={"flex gap-6"}>
                                {socials.map((social, index) => {
                                    return (
                                        <Link key={index} href={social.path} passHref legacyBehavior ><a target="-blank" className={"w-9 h-9 border border-secondary text-secondary rounded-full flex justify-center items-center text-base hover:bg-secondary hover:text-primary hover:transition-all duration-500"} >{social.icon}</a></Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                        <div className='w-full h-full relative'>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' }, }}>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' }, }} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] absolute mix-blend-lighten">
                                    <img
                                        className='relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                                        src='./images/hero-image.png'
                                        alt='hero-image'
                                        width={300}
                                        height={300} ></img>
                                </motion.div>
                                <motion.svg className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative" fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg">
                                    <motion.circle
                                        cx="253"
                                        cy="253"
                                        r="250"
                                        stroke="#80ffdb"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ strokeDasharray: "24 10 0 0" }}
                                        animate={{
                                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                            rotate: [120, 360]
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }} />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </div>
                </div >
            </div>
        </section >

    )
}

export default HeroSection
