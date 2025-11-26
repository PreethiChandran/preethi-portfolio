import React from 'react'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiNextdotjs,
    SiRedux,
    SiGit,
    SiExpress,
    SiGithub,
    SiVercel,
} from 'react-icons/si';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

//aboutme

const about = {
    title: 'About Me',
    description: 'I adore developing user-friendly websites that are both simple and elegant yet scalable.  My background in graphic design has given me a unique perspective on user interface (UI) and user experience (UX) design, allowing me to create websites and applications that are not only aesthetically pleasing but also user-centric. I consider myself to be a lifelong learner.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Preethi Chandran'
        },
        {
            fieldName: 'Email',
            fieldValue: 'preethichandran2198@gmail.com',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+91)-88072 24194',
        },
        {
            fieldName: 'Experience',
            fieldValue: '3 Years',
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Indian',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English, Tamil',
        },
    ]
};

//experience data

const experience = {
    title: 'My Career Path',
    description: 'My journey continues, more updates to be added.',
    items: [
        {
            company: 'Think Health Diagnostics',
            position: 'Software Developer',
            duration: 'Jan 2023 - July 2024',
        },
        {
            company: 'Medha HR',
            position: 'Member of Technical Staff',
            duration: 'Sept 2021 - Dec 2022',
        }
    ]
};

// education data

const education = {
    title: 'My Education',
    description: 'My academic experiences, which have laid the groundwork for my career, are highlighted in this section.',
    items: [
        {
            institution: 'K.L.N College of Information Technology',
            degree: 'Bachelor of Engineering',
            course: 'ECE',
            duration: '2016 - 2020',
        }
    ]
};

//skills data

const skills = {
    title: 'Skills',
    description: 'This list reflects my current expertise, but I’m always expanding my skill set. Currently expanding skillset to transition into a Full Stack Developer role, actively learning backend technologies and frameworks to complement existing expertise in front end development. Check back for updates.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'css 3',
        },
        {
            icon: <FaJs />,
            name: 'javascript',
        },
        {
            icon: <FaReact />,
            name: 'react',
        },
        {
            icon: <FaNodeJs />,
            name: 'node js',
        },
        {
            icon: <SiExpress />,
            name: 'express js',
        },
        {
            icon: <SiRedux />,
            name: 'redux',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind css',
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js',
        },
        {
            icon: <SiGit />,
            name: 'git',
        },
        {
            icon: <SiGithub />,
            name: 'github',
        },
        {
            icon: <SiVercel />,
            name: 'vercel',
        },
    ]
}

const ResumePage = () => {
    return (
        <section className='text-white py-8 px-8 mt-12'>
            <Tabs defaultValue='aboutme' className='flex flex-col lg:flex-row gap-[60px]'>
                <TabsList className='flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0'>
                    <TabsTrigger value={'aboutme'}>About me</TabsTrigger>
                    <TabsTrigger value={'skills'}>Skills</TabsTrigger>
                    <TabsTrigger value={'experience'}>Experience</TabsTrigger>
                    <TabsTrigger value={'education'}>Education</TabsTrigger>
                </TabsList>
                <div className='min-h-[70vh] w-full'>
                    <TabsContent value={'experience'} className='w-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <p className='max-w-[600px] mx-auto xl:mx-0 text-[#ADB7BE]'>{experience.description}</p>
                            <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-[#80ffdb]'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-[#80ffdb]'></span>
                                                    <p className='text-[#ADB7BE]'>{item.company}</p>
                                                </div>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value={'education'} className='w-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{education.title}</h3>
                            <p className='max-w-[600px] mx-auto xl:mx-0 text-[#ADB7BE]'>{education.description}</p>
                            <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1  gap-[30px]'>
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-[#80ffdb]'>{item.duration}</span>
                                                <h3 className='text-xl md:max-w-[660px] min-h-[60px] text-center lg:text-left'>{item.degree} - {item.course}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-[#80ffdb]'></span>
                                                    <p className='text-[#ADB7BE]'>{item.institution}</p>
                                                </div>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value={'skills'} className='w-full h-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[600px] mx-auto xl:mx-0 text-[#ADB7BE]'>{skills.description}</p>
                            </div>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                                {skills.skillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-5xl group-hover:text-[#80ffdb] transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value={'aboutme'} className='w-full text-center xl:text-left'>
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'>
                                {about.title}
                            </h3>
                            <p className='max-w-[600px] text-[#ADB7BE] mx-auto xl:mx-0'>{about.description}</p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-[#ADB7BE]'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>

        </section>
    )
}

export default ResumePage
