"use client";
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'Who I Am',
        path: '/resume'
    },
    {
        name: 'My Creations',
        path: '/work'
    },
]

const MenuOverlay = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-secondary' />
            </SheetTrigger>
            <SheetContent className='flex flex-col xl:hidden'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href={"/"}>
                        <h1 className='text-4xl font-semibold'>pc<span className='text-[#80ffdb]'>.</span></h1>
                    </Link>
                </div>
                <nav className='flex flex-col items-center justify-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-secondary border-b-2 border-secondary"} text-xl capitalize  hover:text-secondary transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                    <a href={"mailto:preethichandran2198@gmail.com"} >
                        {/* <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#80ffdb] hover:bg-slate-200 text-white">Bring Me On Board</Button> */}
                        <Button>Bring Me On Board</Button>
                    </a>
                </nav>
            </SheetContent>
        </Sheet>

    )
}

export default MenuOverlay