'use client';

import Image from "next/image";
import {easeInOut, motion} from "framer-motion";
import {fadeUp} from "@/components/services/Services";

function Banner() {
    return (
        <section className={''}>
            <div className={'container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-x-0 gap-12'}>
                {/** banner image */}
                <div className={'flex justify-center'}>
                    <motion.div initial={{opacity: 0, x: -100, rotate: -180}} animate={{opacity: 1, x: 0, rotate: 0}} transition={{duration: 0.8, delay: 0.2, ease: easeInOut}}>
                        <Image src={'/assets/headphones/headphone4.png'} alt={'headphone'} width={400} height={400} className={'w-[300px] md:w-[400px]'}/>
                    </motion.div>
                </div>

                {/** banner text info */}
                <div className={'flex flex-col justify-center'}>
                    <div className={'text-center md:text-left space-y-4 lg:max-w-[450px]'}>
                        <motion.h1 variants={fadeUp(0.7)} initial={'hidden'} animate={'show'} className={'text-3xl lg:text-4xl font-semibold font-poppins'}>
                            The Latest Headphones with the latest technology
                        </motion.h1>
                        <motion.p variants={fadeUp(0.9)} initial={'hidden'} animate={'show'} className={''}>
                            Experience the latest in headphone technology, designed for superior sound quality, seamless connectivity, and maximum comfort. Stay ahead with cutting-edge features that
                            redefine your audio experience.
                        </motion.p>
                        <motion.button variants={fadeUp(1.3)} initial={'hidden'} animate={'show'}
                                       className={'border-2 border-[#E33343] text-[#E33343] px-6 py-2 rounded-md transition-all duration-300 hover:bg-[#E33343] hover:text-white'}>Shop Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
