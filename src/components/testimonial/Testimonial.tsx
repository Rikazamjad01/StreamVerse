'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

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

    const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const checkScreen = () => {
                setIsMobile(window.innerWidth < 768); // Tailwind 'md'
            };

            checkScreen();
            window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const getSlideStyle = (index: number) => {
        const total = testimonials.length;
        const relativeIndex = (index - activeIndex + total) % total;

        if (isMobile) {
            return relativeIndex === 0
            ? 'z-30 scale-100 opacity-100 translate-x-0'
            : 'opacity-0 scale-75 pointer-events-none';
        }

        if (relativeIndex === 0) {
            return 'z-30 xl:scale-90 lg:scale-85 md:scale-75 sm:scale-60 scale-40 opacity-100 xl:-translate-x-5 lg:-translate-x-2 md:-translate-x-10 -translate-x-8';
        } else if (relativeIndex === 1) {
            return 'z-20 xl:scale-80 lg:scale-75 sm:scale-60 scale-30 opacity-70 translate-x-[calc(100%-360px)] sm:translate-x-[calc(100%-170px)] md:translate-x-[calc(80%-100px)] lg:translate-x-[calc(85%)] xl:translate-x-[calc(90%)]';
        } else if (relativeIndex === total - 1) {
            return 'z-20 xl:scale-80 lg:scale-75 sm:scale-60 scale-30 opacity-70 -translate-x-[calc(100%-300px)] sm:-translate-x-[calc(100%-100px)] md:-translate-x-[calc(90%-50px)] lg:-translate-x-[calc(90%)] xl:-translate-x-[calc(100%)]';
        }

        return 'opacity-0 scale-75 pointer-events-none';
    };

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="w-full flex flex-col items-center justify-center text-center xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 gap-2 px-4 relative md:my-[100px] my-[50px]">
                <div className='lg:mb-[60px] md:mb-[40px] mb-[20px] space-y-2'>
                    <p style={{fontSize: 'var(--H2-size)', fontWeight: 'var(--H3-weight)', color: 'var(--Heading)', lineHeight: 'var(--H1-line-height)'}}>Words of Appreciation</p>
                    <p className='md:text-[18px] sm:text-[16px] text-[14px]'>Hear what our creators have to say about their experience using StreamVerse to go live across multiple platforms.</p>
                </div>
                
                {isMobile ? (
                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="w-full max-w-[300px] h-[350px]"
                    >
                        {testimonials.map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-[var(--Placeholder)] text-white rounded-2xl p-6 border border-[var(--Outline)] shadow-lg flex flex-col items-center text-center h-full">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={60}
                                height={60}
                                className="rounded-2xl mb-4 w-[50px] h-[50px] object-cover"
                                priority
                            />
                            <h3 className="text-[22px] font-semibold mb-1">{testimonial.name}</h3>
                            <p className="text-[13px] text-[var(--Paragraph)] mb-3">{testimonial.title}</p>
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-[#C3EB4D] text-[24px]">★</span>
                                ))}
                            </div>
                            <p className="text-[13px] text-[var(--Paragraph)]">{testimonial.feedback}</p>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    ) : (
                    <> 
                    <div className="relative w-full xl:h-[476px] lg:h-[456px] md:h-[416px] h-[350px] perspective-1000 flex max-sm:-left-[4.5%] max-sm:top-[50%]">
                        {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className={clsx(
                                'absolute top-0 xl:left-1/3 md:left-[31%] sm:left-[28%] left-[10%]',
                                'w-[90%] sm:w-[340px] md:w-[370px] lg:w-[400px] xl:w-[430px] h-full',
                                'h-full transform -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]',
                                getSlideStyle(i),
                                'bg-[var(--Placeholder)] text-white rounded-2xl p-6 border border-[var(--Outline)] shadow-lg flex flex-col items-center text-center'
                            )}
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="rounded-2xl md:w-[80px] md:h-[80px] w-[50px] h-[50px] mb-4 object-cover"
                            />
                            <h3 className="lg:text-[32px] sm:text-[28px] text-[24px] font-semibold mb-1">{testimonial.name}</h3>
                            <p className="lg:text-[18px] sm:text-[14px] text-[12px] text-[var(--Paragraph)] mb-3">{testimonial.title}</p>
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-[#C3EB4D] lg:text-[48px] sm:text-[40px] text-[32px]">★</span>
                                ))}
                            </div>
                            <p className="lg:text-[18px] sm:text-[14px] text-[12px] text-[var(--Paragraph)]">{testimonial.feedback}</p>
                        </div>
                    ))}
                    </div>

                    <div className="gap-4 z-50 flex">
                        <button
                            onClick={prev}
                            className="md:w-[60px] md:h-[60px] h-[50px] w-[50px] p-4 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#2c2c2c] transition"
                            name='previous slide button' id='prevSlide' aria-label="previous"
                        >
                            <BsChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="md:w-[60px] md:h-[60px] h-[50px] w-[50px] p-4 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#2c2c2c] transition"
                            name='next slide button' id='nextSlide' aria-label="next"
                        >
                            <BsChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}