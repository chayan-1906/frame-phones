'use client';

import Link from "next/link";
import {MdMenu} from "react-icons/md";
import {SlEarphones} from "react-icons/sl";
import {motion} from "framer-motion";

const navbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '#',
    },
    {
        id: 2,
        title: 'Categories',
        link: '#',
    },
    {
        id: 3,
        title: 'Blog',
        link: '#',
    },
    {
        id: 4,
        title: 'About',
        link: '#',
    },
    {
        id: 5,
        title: 'Contact',
        link: '#',
    },
];

function Navbar() {
    return (
        <>
            <div className={'bg-brandDark text-white py-8 font-varela'}>
                <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.5}} className={'container flex justify-between items-center'}>
                    {/** logo section */}
                    <div>
                        <Link href={'#'} className={'text-xl font-bold uppercase'}>Playing / <span className={'font-extralight text-white/70'}>Market</span> </Link>
                    </div>

                    {/** menu section */}
                    <div className={'hidden md:block'}>
                        <ul className={'flex items-center gap-4'}>
                            {navbarMenu.map(({id, title, link}) => (
                                <li key={id}>
                                    <Link href={link} className={'inline-block text-sm py-2 px-3 uppercase'}>{title}</Link>
                                </li>
                            ))}
                            <button className={'text-xl ps-14'}>
                                <SlEarphones/>
                            </button>
                        </ul>
                    </div>

                    {/** mobile hamburger section */}
                    <div className={'md:hidden'}>
                        <MdMenu className={'text-4xl'}/>
                    </div>
                </motion.nav>
            </div>
        </>
    );
}

export default Navbar;
