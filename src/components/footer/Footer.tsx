'use client';

import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';
import Link from "next/link";

const footerSections = [
  {
    title: "QUICK LINKS",
    items: [
      { label: "Home", href: "/" },
      { label: "About us", href: "#features" },
      { label: "How it works", href: "#howItWorks" },
    //   { label: "Contact us", href: "contact" },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { label: "Privacy Policy", href: "/privacyPolicy" },
      { label: "Terms & Conditions", href: "/termsAndConditions" },
    //   { label: "Cookie Policy", href: "/cookie-policy" },
    //   { label: "GDPR", href: "/gdpr" },
    ],
  },
];

const Footer = () => {
    return (
        <div className="w-full">

            {/* Footer Section */}
            <footer className="bg-[var(--Placeholder)] border-t border-[var(--Outline)] lg:py-[100px] md:py-[50px] py-[25px] xl:px-[120px] lg:px-[80px] sm:px-[40px] px-4">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className='max-w-[394px] w-full'>
                        <div className='cursor-pointer lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px]'>
                            <p>Stream<span className='text-[var(--Primary)]' style={{ fontWeight: 'var(--H1-weight)' }}>VERSE</span></p>
                        </div>
                        <p className="md:text-[16px] text-[14px] max-w-[394px] w-full">Stream and share your life moments in real-time with Stream VERSE.</p>
                        <div className="md:flex hidden gap-[10px] mt-6">
                            {["/YouTube.svg", "/Twitter.svg", "/Discord.svg", "/Reddit.svg", "/GitHub.svg", "/Telegram.svg"].map((icon, i) => (
                                <Image key={i} src={icon} alt={`icon-${i}`} width={24} height={24} className='cursor-pointer hover:scale-105 duration-300 transition'/>
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
                                <ul className="space-y-2 text-[var(--Paragraph)] sm:text-[16px] text-[14px]">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-[var(--Primary)] cursor-pointer transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link >
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ))}

                        {/* Download section stays separate since it's unique */}
                        <div className='flex flex-col justify-between gap-4'>
                            <div>
                                <h4 className="text-[var(--Heading)] font-semibold md:mb-5 mb-2">DOWNLOAD</h4>
                                <p className=" text-[var(--Paragraph)] text-sm">Get the Stream VERSE app now and start streaming!</p>
                            </div>
                            <Button text="Download App" className="bg-[var(--Primary)] text-black w-[150px] md:w-[170px] lg:w-[228px]" />
                        </div>
                    </div>
                    <div className='flex flex-col md:hidden'>
                        <div className="flex gap-[10px] mt-6">
                            {["/YouTube.svg", "/Twitter.svg", "/Discord.svg", "/Reddit.svg", "/GitHub.svg", "/Telegram.svg"].map((icon, i) => (
                                <Image key={i} src={icon} alt={`icon-${i}`} width={24} height={24} className='cursor-pointer hover:scale-105 duration-300 transition'/>
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
