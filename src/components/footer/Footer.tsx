'use client';

import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

const footerSections = [
    {
        title: 'QUICK LINKS',
        items: ['Home', 'About us', 'How it works', 'Contact us'],
    },
    {
        title: 'LEGAL',
        items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
    },
];

const Footer = () => {
    return (
        <div className="w-full">
            {/* Hero CTA Section */}
            <section className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between sm:px-5 md:px-6 xl:px-16 pt-6 bg-[var(--Primary)] rounded-2xl mb-[166px] xl:gap-[100px] lg:gap-[50px] gap-[20px]">
                <div className="flex-1 lg:w-[472px] md:w-[422px] sm:[372px] w-full max-sm:px-4">
                    <h2 className="text-[var(--Background)] font-semibold" style={{ fontSize: 'var(--H2-size)', lineHeight: 'var(--H1-line-heigh)', fontWeight: 'var(--H2-weight)' }}>
                        Start Livestreaming Smarter Today
                    </h2>
                    <p className="my-[10px] text-[var(--Background)] lg:text-[18px] text-[16px]" style={{lineHeight: 'var(--P2-line-height)'}}>
                        With just one click, go live and engage your audience everywhere without the hassle of managing separate streams.
                    </p>
                    <Button text="Go Live Now" className='bg-[var(--Background)] text-white w-[144px] md:w-[134px] lg:w-[214px]'/>
                </div>

                <div className="">
                    <Image
                        src="/demo.svg"
                        alt="Live Streaming Preview"
                        width={560}
                        height={376}
                        className='xl:w-[560px] lg:w-[460px] w-[360px]'
                        priority
                    />
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[var(--Placeholder)] border-t border-[var(--Outline)] lg:py-[100px] md:py-[50px] py-[25px] xl:px-[120px] lg:px-[80px] sm:px-[40px] px-4">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className='max-w-[394px] w-full'>
                        <div className='cursor-pointer lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px]'>
                            <p>Stream<span className='text-[var(--Primary)]' style={{ fontWeight: 'var(--H1-weight)' }}>VERSE</span></p>
                        </div>
                        <p className="md:text-[16px] text-[14px] max-w-[394px] w-full">Stream and share your life moments in real-time with FLOWLIVE.</p>
                        <div className="md:flex hidden gap-[10px] mt-6">
                            {["/YouTube.svg", "/Twitter.svg", "/Discord.svg", "/Reddit.svg", "/GitHub.svg", "/Telegram.svg"].map((icon, i) => (
                                <Image priority  key={i} src={icon} alt={`icon-${i}`} width={24} height={24} className='cursor-pointer hover:scale-105 duration-300 transition'/>
                            ))}
                        </div>
                        <p className="md:flex hidden text-[var(--Disable)] text-xs mt-10">© 2024 Solana Foundation. All rights reserved.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-3 max-w-[684px] w-full">
                        {footerSections.map((section, index) => (
                            <div className='max-w-[180px] w-full' key={index}>
                                <h4 className='text-[var(--Heading)] sm:mb-5 mb-2' style={{ fontSize: 'var(--P1-size)', fontWeight: 'var(--H3-weight)', color: 'var(--Heading)' }}>
                                    {section.title}
                                </h4>
                                <ul className='space-y-2 text-[var(--Paragraph)] sm:text-[16px] text-[14px]'>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className='hover:text-[var(--Primary)] cursor-pointer'>{item}</li>
                                    ))}
                                </ul> 
                            </div>
                        ))}

                        {/* Download section stays separate since it's unique */}
                        <div className='flex flex-col justify-between gap-4'>
                            <div>
                                <h4 className="text-[var(--Heading)] font-semibold md:mb-5 mb-2">DOWNLOAD</h4>
                                <p className=" text-[var(--Paragraph)] text-sm">Get the FLOWLIVE app now and start streaming!</p>
                            </div>
                            <Button text="Download App" className="bg-[var(--Primary)] text-black w-[150px] md:w-[170px] lg:w-[228px]" />
                        </div>
                    </div>
                    <div className='flex flex-col md:hidden'>
                        <div className="flex gap-[10px] mt-6">
                            {["/YouTube.svg", "/Twitter.svg", "/Discord.svg", "/Reddit.svg", "/GitHub.svg", "/Telegram.svg"].map((icon, i) => (
                                <Image priority key={i} src={icon} alt={`icon-${i}`} width={24} height={24} className='cursor-pointer hover:scale-105 duration-300 transition'/>
                            ))}
                        </div>
                        <p className="flex text-[var(--Disable)] text-xs mt-10">© 2024 Solana Foundation. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
