'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from '../button/Button';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const plans = [
    {
        name: 'Starter Plan',
        description: 'Perfect for new creators getting started with multi-streaming.',
        price: '$9',
        features: [
            'Stream on Multiple Platforms',
            'Basic analytics dashboard',
            '720p HD streaming',
            'Upload custom thumbnails',
            'Stream scheduling',
            'Email support',
        ],
    },
    {
        name: 'Pro Plan',
        description: 'For growing streamers who need more power and control.',
        price: '$19',
        features: [
            'Stream to 5 platforms at once',
            '1080p Full HD streaming',
            'Real-time viewer & stats',
            'Comment management',
            'Milestone & trending alerts',
            'Priority support',
        ],
    },
    {
        name: 'Creator Suite',
        description: 'Advanced tools for professionals and full-time streamers.',
        price: '$39',
        features: [
            'Unlimited streaming',
            'Cloud recording',
            'Custom branding',
            'RTMP support',
            'Team access',
            'Priority support',
        ],
    },
];

const PricingSection = () => {
    const [highlighted, setHighlighted] = useState(2);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Card = (plan: typeof plans[0], index: number) => (
        <div
            onClick={() => setHighlighted(index)}
            className={clsx(
                'rounded-4xl p-2 flex flex-col justify-between',
                'bg-[var(--Placeholder)] text-left border cursor-pointer hover:border-[var(--Primary)] transition duration-200 ease-in-out',
                highlighted === index
                    ? 'border-[var(--Primary)]'
                    : 'border-[var(--Outline)]'
            )}
        >
            <div className="flex flex-col gap-2">
                <div className="bg-[var(--onPlaceholder)] p-4 rounded-3xl">
                    <div className="flex space-x-2 items-center mb-3">
                        {highlighted === index && (
                            <div className="bg-[var(--Primary)] rounded-full w-[10px] h-[10px]"></div>
                        )}
                        <h3 className="text-[var(--Heading)] font-bold">{plan.name}</h3>
                    </div>
                    <p
                        style={{
                            fontSize: 'var(--P2-size)',
                            lineHeight: 'var(--P2-line-height)',
                        }}
                        className="mb-12"
                    >
                        {plan.description}
                    </p>
                    <div className="flex max-lg:flex-col lg:items-center justify-between gap-y-3">
                        <Button
                            text="Get Start"
                            className={clsx(
                                'w-[110px] md:w-[130px] lg:w-[150px] sm:text-[16px] text-[14px]',
                                highlighted === index
                                    ? 'bg-[var(--Primary)] text-[var(--Background)]'
                                    : 'bg-[var(--Placeholder)] text-[var(--Heading)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.5),_0_9px_24px_rgba(0,0,0,0.25)]'
                            )}
                        />
                        <p className="text-[var(--Heading)] md:text-[32px] sm:text-[28px] text-[24px] font-bold">
                            {plan.price}
                            <span className="text-[var(--Disable)] text-base font-medium">/month</span>
                        </p>
                    </div>
                </div>
                <div className="px-2 py-4">
                    <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="flex items-center space-x-2 text-[var(--Paragraph)] sm:text-base text-xs"
                            >
                                <Image
                                    src={'/Selection.svg'}
                                    alt="select icon"
                                    width={20}
                                    height={20}
                                    className={clsx(
                                        'rounded-full p-1 transition-colors duration-200',
                                        highlighted === index
                                            ? 'bg-[var(--Primary)]'
                                            : 'bg-white'
                                    )}
                                />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-[var(--Background)] text-[var(--Paragraph)] mb-[100px]">
            <div className="max-w-[1200px] mx-auto text-center px-4">
                <h2
                    className="text-[var(--Heading)]"
                    style={{
                        fontSize: 'var(--H2-size)',
                        fontWeight: 'var(--H2-weight)',
                        lineHeight: 'var(--H2-line-height)',
                    }}
                >
                    Simple Pricing for Every Creator
                </h2>
                <p
                    className="mt-4"
                    style={{
                        fontSize: 'var(--P1-size)',
                        fontWeight: 'var(--P1-weight)',
                        lineHeight: 'var(--P1-line-height)',
                    }}
                >
                    Flexible plans designed to fit all streamers — from casual content creators to full-time professionals.
                </p>

                {/* Mobile Carousel */}
                {isMobile ? (
                    <div className="mt-10">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1.1}
                            // pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="w-full max-w-[380px] mx-auto"
                        >
                            {plans.map((plan, index) => (
                                <SwiperSlide key={index}>
                                    {Card(plan, index)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    // Desktop Grid
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        {plans.map((plan, index) => (
                            <React.Fragment key={index}>{Card(plan, index)}</React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PricingSection;
