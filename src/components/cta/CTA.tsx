import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'

const CTA = () => {
  return (
    <div>
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
                    className='xl:w-[560px] lg:w-[460px] w-[360px] '
                />
            </div>
        </section>
    </div>
  )
}

export default CTA
