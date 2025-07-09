import React from 'react'
import banner from '../../../public/banner.svg'
import Image from 'next/image'
import Button from '../button/Button'
const Banner = () => {
    return (
        <div className='sm:my-[100px] my-[50px] text-center max-w-[1200px] mx-auto flex flex-col items-center px-4'>
            <Image src={banner} width={1200} height={50} alt="banner"/>
            <p className='max-w-[696px] sm:px-10 mb-[10px] max-sm:mt-5' style={{fontWeight: 'var(--H1-weight)', lineHeight: 'var(--H1-line-height)', fontSize: 'var(--H1-size)' }}>All-in-One Streaming <span className='text-[var(--Primary)]'>Platform</span></p>
            <p style={{fontWeight: 'var(--S2-weight)', lineHeight: 'var(--P1-line-height)', fontSize: 'var(--P1-size)' }}>FLOWLIVE is the ultimate livestreaming solution for content creators. Broadcast across multiple social media platforms like YouTube, TikTok, Instagram, Facebook, and BIGO—all at the same time.</p>
            <Button text='Go Live Now' className='mt-10'/>
        </div>
    )
}

export default Banner
