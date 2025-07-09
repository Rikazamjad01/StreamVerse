'use client';

import React, { useState } from 'react';
import Button from '../button/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='max-w-[1080px] mx-auto rounded-[20px] p-3 flex justify-between items-center font-[var(--font-poppins)] bg-[var(--Placeholder)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.5),_0_9px_24px_rgba(0,0,0,0.25)]'>
                <div className='cursor-pointer lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px]'>
                    <p>Stream<span className='text-[var(--Primary)]' style={{ fontWeight: 'var(--H1-weight)' }}>VERSE</span></p>
                </div>
                <div>
                    <ul className='md:flex hidden text-[18px]'>
                        <li className='py-3 lg:px-5 md:px-3 px-2 cursor-pointer hover:text-[var(--Primary)]'>Home</li>
                        <li className='py-3 lg:px-5 md:px-3 px-2 cursor-pointer hover:text-[var(--Primary)]'>About us</li>
                        <li className='py-3 lg:px-5 md:px-3 px-2 cursor-pointer hover:text-[var(--Primary)]'>How it Works</li>
                        <li className='py-3 lg:px-5 md:px-3 px-2 cursor-pointer hover:text-[var(--Primary)]'>Contact us</li>
                    </ul>
                </div>
                <Button text="Download App" display='max-md:hidden flex'/>
                <div className='md:hidden flex'>
                    <div
                        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="w-[50%] h-[2px] bg-[var(--Primary)] rounded-sm mb-[5px]"></div>
                        <div className="w-[50%] h-[2px] bg-[var(--Primary)] rounded-md mb-[5px]"></div>
                        <div className="w-[50%] h-[2px] bg-[var(--Primary)] rounded-md"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-[var(--Placeholder)] z-30 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } shadow-lg px-6 py-8`}
            >
                <div className="flex justify-between items-center mb-6">
                    <p>Stream<span className='text-[var(--Primary)]' style={{ fontWeight: 'var(--H1-weight)' }}>VERSE</span></p>
                    <button onClick={() => setIsOpen(false)} className="text-[20px] font-bold">x</button>
                </div>
                <ul className='flex flex-col gap-4 text-[16px]'>
                    <li className='cursor-pointer hover:text-[var(--Primary)]'>Home</li>
                    <li className='cursor-pointer hover:text-[var(--Primary)]'>About us</li>
                    <li className='cursor-pointer hover:text-[var(--Primary)]'>How it Works</li>
                    <li className='cursor-pointer hover:text-[var(--Primary)]'>Contact us</li>
                    <li>
                        <Button text="Download App" width="w-full" padding="p-3" className="mt-4 text-[16px]"/>
                    </li>
                </ul>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-40 z-20"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
