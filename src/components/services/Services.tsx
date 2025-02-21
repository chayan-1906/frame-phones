'use client';

import Image from "next/image";
import {motion} from "framer-motion";

const servicesData = [
    {
        id: 1,
        title: 'Security',
        link: '#',
        icon: '/assets/icons/obj1.png',
        desc: 'Enjoy a secure and stable wireless connection with advanced encryption, ensuring uninterrupted and safe listening.',
        delay: 0.5,
    },
    {
        id: 2,
        title: 'Guarantee',
        link: '#',
        icon: '/assets/icons/obj2.png',
        desc: 'Our headphones come with a solid warranty, ensuring long-term reliability and customer satisfaction.',
        delay: 0.8,
    },
    {
        id: 3,
        title: 'Affordability',
        link: '#',
        icon: '/assets/icons/obj3.png',
        desc: 'Premium sound at a budget-friendly price—experience high-quality audio without breaking the bank.',
        delay: 1.1,
    },
];

export const fadeUp = (delay: number) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
}

function Services() {
    return (
        <section className={'bg-gray-100 font-poppins py-8'}>
            <div className={'container py-14'}>
                <motion.h1 variants={fadeUp(0.5)} initial={'hidden'} whileInView={'show'} className={'text-3xl font-bold text-center pb-10'}>Services</motion.h1>

                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'}>
                    {servicesData.map((service) => {
                        const {id, title, desc, icon, link, delay} = service;

                        return (
                            <motion.div key={id} variants={fadeUp(delay)} initial={'hidden'} whileInView={'show'}
                                        className={'flex flex-col items-center justify-center p-5 max-w-[400px] mx-auto shadow-lg rounded-xl bg-white'}>
                                <Image src={icon} alt={title} width={400} height={400} className={' mb-4'}/>
                                <div className={'text-center space-y-2'}>
                                    <h1 className={'text-2xl font-bold'}>{title}</h1>
                                    <p className={'text-center text-sm text-black/75'}>{desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
