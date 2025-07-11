'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        title: 'HR Executive at Tech',
        image: '/Sarah.svg',
        rating: 5,
        feedback:
        'As a fitness coach, I need reliable streaming quality. FLOWLIVE delivers that and more with the ability to interact with comments from all platforms in one dashboard.',
    },
    {
        name: 'John Doe',
        title: 'Marketing Lead at StreamCo',
        image: '/JohnDoe.jpg',
        rating: 4,
        feedback: 'We increased engagement 3x after using FLOWLIVE. It\'s intuitive and powerful!',
    },
    {
        name: 'Emily Davis',
        title: 'Content Creator',
        image: '/Emily.jpg',
        rating: 5,
        feedback: 'No more switching tabs! FLOWLIVE saved me hours every week.',
    },
    {
        name: 'Jane Smith',
        title: 'Influencer',
        image: '/JaneSmith.jpg',
        rating: 5,
        feedback: "This tool gives me everything I need in one place. It's just fantastic.",
    },
    {
        name: 'Michael Lee',
        title: 'Streamer',
        image: '/Michael.jpg',
        rating: 4,
        feedback: 'FLOWLIVE took our team live events to a new level. Worth every penny.',
    },
];

export default function Custom3DCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const getSlideStyle = (index:number) => {
        const position = (index - activeIndex + testimonials.length) % testimonials.length;
        const isCenter = position === 0;
        const isLeft = position === testimonials.length - 1;
        const isRight = position === 1;

        if (isCenter)
        return 'z-30 xl:scale-95 lg:scale-90 md:scale-70 rotate-y-0 opacity-100 left-[50%]';
        if (isLeft)
        return 'z-20 xl:scale-80 lg:scale-70 md:scale-60 -rotate-y-6 xl:-translate-x-[100%] lg:-translate-x-[95%] md:-translate-x-[85%]  opacity-60';
        if (isRight)
        return 'z-20 xl:scale-80 lg:scale-70 md:scale-60 rotate-y-6 xl:translate-x-[90%] lg:translate-x-[80%] md:translate-x-[50%] opacity-60';

        return 'opacity-0 scale-75 pointer-events-none';
    };

    return (
        <div className='max-w-[1200px] mx-auto md:flex hidden'>
            <div className="w-full flex flex-col items-center justify-center text-center gap-10 py-10 px-4 relative md:my-[100px] my-[50px]">
                <div className='mb-[60px]'>
                    <p style={{fontSize: 'var(--H2-size)', fontWeight: 'var(--H3-weight)', color: 'var(--Heading)', lineHeight: 'var(--H1-size)'}}>Words of Appreciation</p>
                    <p className='md:text-[18px] text-[16px]'>Hear what our creators have to say about their experience using StreamVerse to go live across multiple platforms.</p>
                </div>
                <div className="relative w-full h-[476px] perspective-1000">
                    {testimonials.map((testimonial, i) => (
                    <div
                        key={i}
                        className={`absolute top-0 left-1/3 xl:w-[430px] lg:w-[400px] md:w-[370px] sm:w-[340px] h-full transform -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${getSlideStyle(i)}  h-full bg-[#1E1F1E] text-white rounded-2xl p-6 border border-[var(--Outline)] shadow-lg flex flex-col items-center text-center`}
                    >
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-2xl md:w-[80px] md:h-[80px] mb-4 object-cover"
                        />
                        <h3 className="text-[32px] font-semibold mb-1">{testimonial.name}</h3>
                        <p className="text-[18px] text-[var(--Paragraph)] mb-3">{testimonial.title}</p>
                        <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-[#C3EB4D] text-[48px]">★</span>
                        ))}
                        </div>
                        <p className="text-[18px] text-[var(--Paragraph)]">{testimonial.feedback}</p>
                    </div>
                    ))}
                </div>

                <div className="flex gap-4 z-50">
                    <button
                        onClick={prev}
                        className="w-[60px] h-[60px] p-4 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#2c2c2c] transition"
                    >
                        <BsChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="w-[60px] h-[60px] p-4 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#2c2c2c] transition"
                    >
                        <BsChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}