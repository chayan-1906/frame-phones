'use client';

import Image from "next/image";

const blogsData = [
    {
        id: 1,
        title: 'Top 5 Features to Look for in Wireless Headphones',
        desc: 'Discover the must-have features in modern wireless headphones, from noise cancellation to battery life and sound quality.',
        link: '#',
        img: '/assets/blogs/blog1.jpg',
    },
    {
        id: 2,
        title: 'How Noise Cancellation Works in Headphones',
        desc: 'Learn about the science behind noise cancellation and how it enhances your listening experience in different environments.',
        link: '#',
        img: '/assets/blogs/blog2.jpg',
    },
    {
        id: 3,
        title: 'Wireless vs. Wired Headphones: Which One Should You Choose?',
        desc: 'Weigh the pros and cons of wireless and wired headphones to find out which suits your lifestyle and listening habits best.',
        link: '#',
        img: '/assets/blogs/blog3.jpg',
    },
    {
        id: 4,
        title: 'The Evolution of Headphone Technology Over the Years',
        desc: 'Explore how headphones have transformed from bulky wired devices to sleek, feature-packed wireless accessories.',
        link: '#',
        img: '/assets/blogs/blog4.jpg',
    },
];

function Blogs() {
    return (
        <section className={'bg-gray-50'}>
            <div className={'container py-1'}>
                <h1 className={'text-3xl font-bold text-center font-poppins pb-8'}>Blogs</h1>
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'}>
                    {blogsData.map(({id, title, desc, img, link}) => (
                        <div key={id} className={'flex flex-col p-5 max-w-[300px] gap-2 mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'}>
                            <Image src={img} alt={title} width={400} height={400} className={'rounded-md object-cover'}/>
                            <div className={'space-y-2'}>
                                <h1 className={'text-xl font-bold line-clamp-2'}>{title}</h1>
                                <p className={'line-clamp-2'}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
