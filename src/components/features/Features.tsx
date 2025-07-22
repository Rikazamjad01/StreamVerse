'use client';

import Image from 'next/image';
import React from 'react';

const keyFeatures = [
    {
        icon: '/multistream.svg',
        title: 'Multi-streaming',
        description: 'Go live on YouTube, Facebook, TikTok, and more — all at once from one dashboard.',
        iconBg: '#0FC6EE',
        bg: 'bg-gradient-to-b from-[#232C2E] to-[#141414]',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        icon: '/audience.svg',
        title: 'Real-Time Audience',
        description: 'View and respond to comments across platforms in a single dashboard.',
        iconBg: '#F29C05',
        bg: 'bg-gradient-to-b from-[#2E2A1F] to-[#141414]',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        icon: '/analytics.svg',
        title: 'Advanced Analytics',
        description: 'Get detailed insights on viewer engagement and performance.',
        iconBg: '#ADCC0F',
        bg: 'bg-gradient-to-b from-[#242E1F] to-[#141414]',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        icon: '/stream.svg',
        title: 'Stream Customization',
        description: 'Adjust resolution, audio, and settings for each platform.',
        iconBg: '#3D3D3C',
        bg: 'bg-gradient-to-b from-[#262B2E] to-[#141414]',
        colSpan: 'lg:col-span-2 col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        icon: '/integeration.svg',
        title: 'Social Integration',
        description: 'Easily link your accounts and manage livestreams in one place.',
        iconBg: '#835BEC',
        bg: 'bg-gradient-to-b from-[#28262E] to-[#141414]',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
];

const Features = () => {
    return (
        <div className="max-w-[1200px] w-full mx-auto text-center sm:my-[100px] my-[50px] xl:px-0 px-4">
            <p style={{ fontSize: 'var(--H2-size)', fontWeight: 'var(--H3-weight)' }}>
                Key Features
            </p>
            <p className="text-[18px]" style={{ fontWeight: 'var(--S2-weight)' }}>
                Everything you need to maximize your streaming reach
            </p>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 mt-10">
                {keyFeatures.map((feature, index) => (
                <div key={index} className={` rounded-2xl p-6 text-white text-start gap-10 flex flex-col ${feature.bg} ${feature.colSpan} ${feature.rowSpan} h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]`}>
                    <div className='flex flex-col h-full gap-10'>
                        <div className="w-[72px] h-[72px] p-4 rounded-2xl mb-10" style={{ backgroundColor: feature.iconBg }}>
                            <Image src={feature.icon} alt={`${feature.title} icon`} width={40} height={40} />
                        </div>
                        <div className='h-full' style={{backgroundImage: `url('/cardBgImage.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <h3 className="font-semibold mb-2" style={{ fontSize: 'var(--H3-size)' }}>
                                {feature.title}
                            </h3>
                            <p className="text-gray-300" style={{ fontSize: 'var(--P1-size)' }}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
                ))}
            </section>
        </div>
    );
};

export default Features;
