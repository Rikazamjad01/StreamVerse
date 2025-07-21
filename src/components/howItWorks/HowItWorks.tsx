'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Sign Up & Connect',
        points: [
        'Download the app and create an account',
        'Link your social media platforms (YouTube, TikTok, Instagram, Facebook, BIGO)',
        ],
    },
    {
        id: '02',
        title: 'Customize Stream',
        points: [
        'Choose where you want to go live (YouTube, TikTok, etc.)',
        'Set your stream quality, title, description, and thumbnail',
        ],
    },
    {
        id: '03',
        title: 'Go Live Instantly',
        points: [
        'Click "Go Live" and start broadcasting across multiple platforms',
        'Manage comments, reactions, and viewer interactions in real-time from a single dashboard',
        ],
    },
    {
        id: '04',
        title: 'Stream Insights',
        points: [
        'Check engagement and performance after streaming',
        'Use insights to refine your content strategy for maximum reach and impact',
        ],
    },
];

export default function HowItWorks() {
    const containerRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=1000',
                pin: true,
                scrub: true,
            },
        });

        steps.forEach((_, i) => {
            tl.to({}, {
                duration: 1,
                onStart: () => setActiveStep(i),
            });
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []); 

    return (
        <section ref={containerRef} className="max-w-[1200px] mx-auto xl:px-0 px-4">
            <div className='flex flex-col gap-10'>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">How it Works</h2>
                    <p className="text-center text-[var(--Heading)]">
                        Start streaming to multiple platforms in just a few simple steps
                    </p>
                </div>

                <div className="flex flex-col md:flex-row xl:gap-10 items-center justify-between">
                    {/* Left - Steps */}
                    <div className="xl:w-[690px] lg:w-[590px] w-full">
                        {steps.map((step, index) => (
                        <div key={step.id}>
                            <div className="flex flex-col items-start justify-center border-l border-[var(--Outline)] xl:ps-[88px] lg:ps-[68px] md:ps-[58px] ps-[48px] pe-2 py-[14px] ml-6 relative max-w-[602px]">
                            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                                {step.points.map((point, i) => (
                                <li key={i}>{point}</li>
                                ))}
                            </ul>

                                <div className={`text-[var(--Background)] font-bold -left-6 absolute rounded-2xl w-12 h-12 p-2 flex items-center justify-center ${
                                    activeStep === index
                                        ? 'bg-[var(--Primary)]'
                                        : 'bg-[var(--onPlaceholder)] text-[var(--Disable)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.5),_0_9px_24px_rgba(0,0,0,0.25)]'
                                }`}>
                                {step.id}
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* Right - Image Placeholder */}
                    <div className="xl:w-[470px] lg:w-[420px] md:[350px] w-full flex justify-center">
                        <Image
                            src="/blurPhone.svg"
                            alt="App preview"
                            width={300}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
