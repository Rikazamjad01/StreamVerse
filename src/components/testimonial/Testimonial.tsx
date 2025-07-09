'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const testimonials = [
    {
        name: "Sarah Mitchell",
        title: "HR Executive at Tech",
        image: "/sarah.svg",
        rating: 5,
        feedback:
        "As a fitness coach, I need reliable streaming quality. FLOWLIVE delivers that and more with the ability to interact with comments from all platforms in one dashboard.",
    },
    {
        name: "John Doe",
        title: "Marketing Lead at StreamCo",
        image: "/sarah.svg",
        rating: 4,
        feedback:
        "We increased engagement 3x after using FLOWLIVE. It's intuitive and powerful!",
    },
    {
        name: "Emily Davis",
        title: "Content Creator",
        image: "/sarah.svg",
        rating: 5,
        feedback:
        "No more switching tabs! FLOWLIVE saved me hours every week.",
    },
        {
        name: "John Doe",
        title: "Marketing Lead at StreamCo",
        image: "/sarah.svg",
        rating: 4,
        feedback:
        "We increased engagement 3x after using FLOWLIVE. It's intuitive and powerful!",
    },
    {
        name: "Emily Davis",
        title: "Content Creator",
        image: "/sarah.svg",
        rating: 5,
        feedback:
        "No more switching tabs! FLOWLIVE saved me hours every week.",
    },
]

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    const prev = () => {
        setActiveIndex((prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
        )
    }

    const next = () => {
        setActiveIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
        )
    }

    const getCardStyle = (index: number) => {
        if (index === activeIndex) {
        return 'scale-100 z-20 opacity-100'
        } else if (
        index === (activeIndex + 1) % testimonials.length ||
        index === (activeIndex - 1 + testimonials.length) % testimonials.length
        ) {
        return 'scale-90 z-10 opacity-60'
        } else {
        return 'hidden'
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center gap-8 py-10 bg-[#0e0e0e] text-white">
            <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center overflow-hidden">
                {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out flex flex-col items-center text-center w-[90%] max-w-md p-6 bg-[#1a1a1a] rounded-2xl shadow-lg ${getCardStyle(index)}`}
                >
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-[60px] h-[60px] rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{testimonial.title}</p>
                    <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#C6FF4D] text-xl">★</span>
                    ))}
                    </div>
                    <p className="text-sm text-gray-300">{testimonial.feedback}</p>
                </div>
                ))}
            </div>

            <div className="flex gap-4">
                <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#2c2c2c] transition"
                >
                    <BsChevronLeft />
                </button>
                <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#2c2c2c] transition"
                >
                    <BsChevronRight />
                </button>
            </div>
        </div>
    )
}
