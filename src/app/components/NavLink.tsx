"use client";
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

const NavLink = () => {
    const pathname = usePathname();

    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-[#80ffdb] border-b-2 border-[#80ffdb]"} capitalize font-medium hover:text-[#80ffdb] transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default NavLink