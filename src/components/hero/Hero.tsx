'use client';

import {useCallback, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";
import {AnimatePresence, easeInOut, motion} from "framer-motion";

const headphoneData = [
    {
        id: 1,
        image: '/assets/headphones/headphone1.png',
        title: 'Headphones Wireless (Modal Brown)',
        subtitle: 'Experience premium sound quality with a sleek brown finish, designed for all-day comfort and deep bass.',
        price: '$100',
        modal: 'Modal Brown',
        bgColor: '#8B5958',
    },
    {
        id: 2,
        image: '/assets/headphones/headphone2.png',
        title: 'Headphones Wireless (Lime Green)',
        subtitle: 'Stand out with a vibrant lime green design while enjoying immersive audio, long battery life, and noise isolation.',
        price: '$100',
        modal: 'Lime Green',
        bgColor: '#638153',
    },
    {
        id: 3,
        image: '/assets/headphones/headphone3.png',
        title: 'Headphones Wireless (Ocean Blue)',
        subtitle: 'Dive into rich, crystal-clear sound with a stylish ocean blue finish, ergonomic fit, and superior wireless connectivity.',
        price: '$100',
        modal: 'Ocean Blue',
        bgColor: '#5D818C',
    },
];

const fadeUp = (delay: number) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },
        },
    };
}

function Hero() {
    const [activeHeadphone, setActiveHeadphone] = useState(headphoneData[0]);

    const handleActiveData = useCallback((headphone: any) => {
        setActiveHeadphone(headphone);
    }, []);

    return (
        <>
            <section className={'bg-brandDark text-white font-varela'}>
                <div className={'container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'}>
                    {/** headphone info */}
                    <div className={'flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'}>
                        <div className={'space-y-5 text-center md:text-left'}>
                            <AnimatePresence mode={'wait'}>
                                <motion.h1 key={activeHeadphone.id} variants={fadeUp(0.2)} initial={'hidden'} animate={'show'} exit={'exit'} className={'text-3xl lg:text-6xl font-bold font-varela'}>
                                    {activeHeadphone.title}
                                </motion.h1>
                            </AnimatePresence>

                            <AnimatePresence mode={'wait'}>
                                <motion.p key={activeHeadphone.id} variants={fadeUp(0.3)} initial={'hidden'} animate={'show'} exit={'exit'} className={'text-sm leading-loose text-white/80'}>
                                    {activeHeadphone.subtitle}
                                </motion.p>
                            </AnimatePresence>

                            <AnimatePresence mode={'wait'}>
                                <motion.button key={activeHeadphone.id} variants={fadeUp(0.3)} initial={'hidden'} animate={'show'} exit={'exit'}
                                               style={{backgroundColor: activeHeadphone.bgColor}} className={`px-4 py-2 inline-block font-normal rounded-md`}>
                                    Buy and Listen
                                </motion.button>
                            </AnimatePresence>

                            {/** headphone list separator */}
                            <div className={'flex items-center justify-center md:justify-start gap-4 !mt-24'}>
                                <div className={'w-20 h-[1px] bg-white'}/>
                                <p className={'uppercase text-sm'}>Top Headphones for you</p>
                                <div className={'w-20 h-[1px] bg-white'}/>
                            </div>

                            {/** headphone list switcher */}
                            <div className={'grid grid-cols-3 gap-10'}>
                                {headphoneData.map((headphone) => {
                                    const {id, title, subtitle, image, price, modal, bgColor} = headphone;

                                    return (
                                        <div key={id} className={'grid grid-cols-2 place-items-center cursor-pointer'} onClick={() => handleActiveData(headphone)}>
                                            <div className={''}>
                                                <Image src={image} alt={title} width={400} height={400} className={'w-[200px]'}/>
                                            </div>
                                            <div className={'space-y-2'}>
                                                <p className={'text-base font-bold'}>{price}</p>
                                                <p className={'text-xs font-normal text-nowrap'}>{modal}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/** hero image */}
                    <div className={'flex flex-col justify-end items-center'}>
                        <AnimatePresence mode={'wait'}>
                            {/*<motion.div key={activeHeadphone.id} variants={fadeUp(0.2)} initial={'hidden'} animate={'show'} exit={'exit'} transition={{duration: 0.5}}>*/}
                            <motion.div key={activeHeadphone.id} initial={{opacity: 0, scale: 0.9, y: 1}} animate={{opacity: 1, scale: 1, y: 0}}
                                        exit={{opacity: 0, scale: 0.9, y: 100, transition: {duration: 0.2}}} transition={{duration: 0.4, delay: 0.2, ease: easeInOut}}>
                                <Image src={activeHeadphone.image} alt={activeHeadphone.title} width={400} height={400} className={'w-[300px] md:w-[400px] xl:w-[500px] object-cover'}/>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/** whatsapp icon */}
                    <div className={'text-5xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'}>
                        <Link href={'#'}>
                            <FaWhatsapp/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
