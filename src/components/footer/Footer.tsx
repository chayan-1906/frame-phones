'use client';

import {FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram} from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";
import Image from "next/image";
import {motion} from "framer-motion";

function Footer() {
    return (
        <footer className={'bg-primary pt-12 pb-8 text-white'}>
            <div className={'container'}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'}>
                    {/** company details section */}
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}} className={'space-y-6'}>
                        <h1 className={'text-3xl font-bold uppercase'}>Playing</h1>
                        <p className={'text-sm max-w-[300px]'}>
                            At Playing/Market, we are committed to delivering cutting-edge wireless audio technology. Our headphones combine superior sound quality, advanced noise cancellation,
                            and long-lasting battery life to enhance your listening experience. Whether you're a music lover, gamer, or professional, our innovative designs ensure comfort and
                            performance for every moment. Experience the future of sound with us.
                        </p>

                        <div>
                            <p className={'flex items-center gap-2'}>
                                <FaPhone/> +1 (123) 456-7890
                            </p>
                            <p className={'flex items-center gap-2 mt-2'}>
                                {' '}
                                <FaMapLocation/> Noida, Uttar Pradesh
                            </p>
                        </div>
                    </motion.div>

                    {/** footer links section */}
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4, duration: 0.6}} className={'space-y-6'}>
                        <h1 className={'text-3xl font-bold'}>Quick Links</h1>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-3'}>
                            <div>
                                <ul className={'space-y-2'}>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <ul className={'space-y-2'}>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/** social links section */}
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6, duration: 0.6}} className={'space-y-6'}>
                        <h1 className={'text-3xl font-bold'}>Follow Us</h1>
                        <div className={'flex items-center gap-3'}>
                            <FaFacebook className={'text-3xl hover:scale-105 duration-500 cursor-pointer'}/>
                            <FaInstagram className={'text-3xl hover:scale-105 duration-500 cursor-pointer'}/>
                            <FaTelegram className={'text-3xl hover:scale-105 duration-500 cursor-pointer'}/>
                            <FaGoogle className={'text-3xl hover:scale-105 duration-500 cursor-pointer'}/>
                        </div>

                        <div className={'space-y-2'}>
                            <p>Payment Methods</p>
                            <Image src={'/assets/credit-cards.webp'} alt={'payment'} width={400} height={400} className={'w-[80%]'}/>
                        </div>
                    </motion.div>
                </div>

                {/** copyright section */}
                <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.8, duration: 0.6}} className={'text-white text-center mt-8 border-t-2 pt-8'}>© 2025. All Rights Reserved</motion.p>
            </div>
        </footer>
    );
}

export default Footer;
