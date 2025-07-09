'use client';

import Image from 'next/image';
import Demo from '../../../public/Frame 87.svg';

const download = [
    {
        title: 'iOS',
        type: 'Mobile App',
        button: {
        icon: '/apple.svg',
        supText: 'Download on the',
        platform: 'App Store',
        },
    },
    {
        title: 'Play Store',
        type: 'Mobile App',
        button: {
        icon: '/playStore.svg',
        supText: 'Get it on',
        platform: 'Google Play',
        },
    },
];

const DownloadButton = ({ icon, supText, platform,}: {icon: string;supText: string;platform: string;
}) => (
    <div className="bg-[var(--onPlaceholder)] py-3 px-4 flex items-center gap-3 rounded-xl mt-6 cursor-pointer hover:scale-105 transition">
        <Image src={icon} alt={`${platform} icon`} width={40} height={40} />
        <div className="text-left">
            <p className="text-[12px]">{supText}</p>
            <p className="text-[20px]">{platform}</p>
        </div>
    </div>
);

const AppPreviewSection = () => {
    return (
        <div className="max-w-[1440px] mx-auto text-center py-12 text-[var(--Heading)]">
            <Image
                src={Demo}
                alt="app demo image"
                width={1440}
                height={50}
                className="mx-auto mb-8"
            />

            <p
                style={{ fontSize: 'var(--H2-size)', fontWeight: '600',}}
                className="max-sm:px-4"
            >
                Download StreamVerse App
            </p>
            <p className="md:text-[18px] mt-4 text-[#ccc] max-w-[640px] mx-auto max-sm:px-4">
                Go live anytime, anywhere. Stream seamlessly across all your favorite platforms — right from your phone.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 max-sm:px-4">
                {download.map((data, index) => (
                <div
                    key={index}
                    className="max-w-[400px] w-full bg-[var(--Placeholder)] p-6 rounded-3xl flex flex-col items-center justify-center"
                >
                    <p className="font-semibold sm:text-[32px] text-[28px] pb-[11px]">{data.title}</p>
                    <p className="text-[20px]">{data.type}</p>
                    <DownloadButton
                        icon={data.button.icon}
                        supText={data.button.supText}
                        platform={data.button.platform}
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

export default AppPreviewSection;
