"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from '../components/WorkSliderBtn';
import { PiCaretRightBold } from 'react-icons/pi';

const projects = [
    {
        num: '01',
        category: 'Web',
        title: 'ChatMate',
        description: 'Developed an AI-powered chatbot application with GPT API integration, delivering intelligent and personalized conversations, real-time support, and enhanced user engagement through natural language understanding.',
        image: '/images/chatmate.png',
        github: 'https://github.com/PreethiChandran/chatmate-api',
        stack: [{ name: 'Tailwind CSS' }, { name: 'Typescript' }, { name: 'Next.Js' }],
    },
    {
        num: '02',
        category: 'Web',
        title: 'Farina',
        description: 'Designed a vibrant sweets website featuring an enticing display of confectionery products, easy navigation, and a seamless shopping experience, all crafted to delight and engage users.',
        image: '/images/farina.png',
        github: 'https://github.com/PreethiChandran/Farina',
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }]
    },
    {
        num: '03',
        category: 'Web',
        title: 'Gusto',
        description: 'Created a restaurant website using HTML and CSS, featuring an elegant design, menu display, reservation form, and contact information, providing a user-friendly and visually appealing online experience.',
        image: '/images/gusto.png',
        github: 'https://github.com/PreethiChandran/Gusto',
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javascript' }]
    },
    {
        num: '04',
        category: 'Web',
        title: 'Polo',
        description: 'Built a professional business website using HTML and CSS, showcasing services, team members, and client testimonials, with a clean design and intuitive navigation for an impactful online presence.',
        image: '/images/polo.png',
        github: 'https://github.com/PreethiChandran/Polo',
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javascript' }]
    },
    {
        num: '05',
        category: 'Web',
        title: 'SEO',
        description: 'Developed an SEO-focused website, featuring optimized content, meta tags, and responsive design to enhance search engine visibility and improve user engagement.',
        image: '/images/seo.png',
        github: 'https://github.com/PreethiChandran/seolounge',
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javascript' }]
    }, {
        num: '06',
        category: 'Web',
        title: 'Pop Movies',
        description: 'Created a movies website, showcasing a clean, organized list of movie titles with brief details and a search function for easy navigation and an engaging user experience',
        image: '/images/popmovie.png',
        github: 'https://github.com/PreethiChandran/Pop_movies',
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javascript' }]
    },

]
const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[20px] h-[50%]'>
                            <div className='text-8xl leading-none font-extrabold text-outline'>{project.num}</div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-secondary transition-all duration-500 capitalize'>{project.title}</h2>
                            <p className='text-white/60'>{project.description}</p>
                            <ul className='flex gap-4'>
                                {project.stack && project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-lg text-secondary'>
                                            {item.name}
                                            {index != project.stack.length - 1 && ","}
                                        </li>
                                    )

                                })}
                            </ul>
                            <div className='border border-white/20'></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.github} passHref legacyBehavior >
                                    <a target="-blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    <BsGithub className='text-white text-3xl group-hover:text-secondary' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repo</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-white-50/20'>
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            <div className='relative w-full h-full'>
                                                <Image src={project.image} alt={'thumb'} fill className='object-cover'></Image>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtn />
                        </Swiper>

                    </div>
                </div>
            </div>
        </motion.section>

    )
}

export default Work;