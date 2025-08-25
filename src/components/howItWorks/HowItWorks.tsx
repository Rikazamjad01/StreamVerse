'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

    const steps = [
        {
            id: '01',
            title: 'Sign Up & Connect',
            points: [
            'Download the app and create an account',
            'Link your social media platforms (YouTube, TikTok, Instagram, Facebook, BIGO)',
            ],
            image: '/step1.png', 
        },
        {
            id: '02',
            title: 'Customize Stream',
            points: [
            'Choose where you want to go live (YouTube, TikTok, etc.)',
            'Set your stream quality, title, description, and thumbnail',
            ],
            image: '/step2.png',
        },
        {
            id: '03',
            title: 'Go Live Instantly',
            points: [
            'Click "Go Live" and start broadcasting across multiple platforms',
            'Manage comments, reactions, and viewer interactions in real-time from a single dashboard',
            ],
            image: '/step1.png',
        },
        {
            id: '04',
            title: 'Stream Insights',
            points: [
            'Check engagement and performance after streaming',
            'Use insights to refine your content strategy for maximum reach and impact',
            ],
            image: '/step4.png',
        },
    ];


export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-[1200px] mx-auto xl:px-0 px-4 py-10">
            <div className="flex flex-col gap-10" id='howItWorks'>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">How it Works</h2>
                    <p className="text-center text-gray-400">
                        Start streaming to multiple platforms in just a few simple steps
                    </p>
                </div>

                <div className="flex flex-col md:flex-row xl:gap-10 gap-3 items-center justify-between">
                    {/* Left - Steps */}
                    <div className="xl:w-[690px] lg:w-[590px] w-full">
                        {steps.map((step, index) => (
                        <div key={step.id}>
                            <div className="flex flex-col items-start justify-center border-l border-[var(--Outline)] xl:ps-[88px] lg:ps-[68px] md:ps-[58px] ps-[48px] sm:pe-2 py-[14px] ml-6 relative max-w-[602px] transition-all duration-500">
                                <div className='h-[100px] flex flex-col justify-center'>
                                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                                    {/* Animated Bullet Points */}
                                    <ul
                                        className={`pl-5 space-y-1 text-gray-300 transition-all duration-500 ${
                                        activeStep === index ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
                                        }`} style={{fontSize: 'var(--P2-size)'}}
                                    >
                                        {step.points.map((point, i) => (
                                        <li key={i} className="list-disc">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Step Number Bubble */}
                                <div
                                    className={`text-[var(--Background)] font-bold -left-6 absolute rounded-2xl w-12 h-12 p-2 flex items-center justify-center transition-all duration-300 ${
                                    activeStep === index
                                        ? 'bg-[var(--Primary)] text-black'
                                        : 'bg-[var(--onPlaceholder)] text-[var(--Disable)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.5),_0_9px_24px_rgba(0,0,0,0.25)]'
                                    }`}
                                >
                                    {step.id}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* Right - Image */}
                    <div className="xl:w-[470px] lg:w-[420px] md:[350px] w-full flex justify-center">
                          <Image
                                key={steps[activeStep].image} 
                                src={steps[activeStep].image}
                                alt={steps[activeStep].title}
                                width={300}
                                height={500}
                                className="object-contain w-[60%] h-[50%]"
                            />
                    </div>
                </div>
            </div>
        </section>
    );
}
