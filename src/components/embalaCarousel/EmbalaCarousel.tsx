// 'use client'

// import React, { useCallback, useEffect, useRef } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import type { EmblaCarouselType } from 'embla-carousel'
// import {
//     NextButton,
//     PrevButton,
//     usePrevNextButtons,
// } from './EmblaCarouselArrowButtons'
// import type { Testimonial } from '@/components/testimonial/Testimonial'

// interface EmblaCarouselProps {
//     slides: Testimonial[]
//     options?: object
// }

// const TWEEN_FACTOR_BASE = 0.52

// const numberWithinRange = (number: number, min: number, max: number): number =>
//     Math.min(Math.max(number, min), max)

// const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options = {} }) => {
//     const [emblaRef, emblaApi] = useEmblaCarousel(options)
//     const tweenFactor = useRef<number>(0)
//     const tweenNodes = useRef<HTMLElement[]>([])

//     const {
//         prevBtnDisabled,
//         nextBtnDisabled,
//         onPrevButtonClick,
//         onNextButtonClick,
//     } = usePrevNextButtons(emblaApi)

//     const setTweenNodes = useCallback((emblaApi: EmblaCarouselType) => {
//         tweenNodes.current = emblaApi.slideNodes()
//     }, [])

//     const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//         tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
//     }, [])

//     const tweenScale = useCallback(
//         (emblaApi: EmblaCarouselType, eventName?: string) => {
//         const engine = emblaApi.internalEngine()
//         const scrollProgress = emblaApi.scrollProgress()
//         const slidesInView = emblaApi.slidesInView()
//         const isScrollEvent = eventName === 'scroll'

//         emblaApi.scrollSnapList().forEach((scrollSnap: number, snapIndex: number) => {
//             let diffToTarget = scrollSnap - scrollProgress
//             const slidesInSnap = engine.slideRegistry[snapIndex]

//             slidesInSnap.forEach((slideIndex: number) => {
//             if (isScrollEvent && !slidesInView.includes(slideIndex)) return

//             if (engine.options.loop) {
//                 engine.slideLooper.loopPoints.forEach((loopItem: { target: () => any; index: number }) => {
//                 const target = loopItem.target()
//                 if (slideIndex === loopItem.index && target !== 0) {
//                     const sign = Math.sign(target)
//                     if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
//                     if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
//                 }
//                 })
//             }

//             const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
//             const scale = numberWithinRange(tweenValue, 0.85, 1).toFixed(3)
//             const tweenNode = tweenNodes.current[slideIndex]
//                 if (tweenNode) {
//                     tweenNode.style.transform = `scale(${scale})`
//                 }
//             })
//         })
//         },
//         []
//     )

//     useEffect(() => {
//         if (!emblaApi) return

//         setTweenNodes(emblaApi)
//         setTweenFactor(emblaApi)
//         tweenScale(emblaApi)

//         emblaApi
//         .on('reInit', setTweenNodes)
//         .on('reInit', setTweenFactor)
//         .on('reInit', tweenScale)
//         .on('scroll', tweenScale)
//         .on('slideFocus', tweenScale)
//     }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale])

//     return (
//         <div className="embla">
//             <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//                 <div className="embla__container flex">
//                 {slides.map((testimonial, index) => (
//                     <div key={index}>
//                         <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl text-white h-full flex flex-col items-center text-center">
//                             <img
//                                 src={testimonial.image}
//                                 alt={testimonial.name}
//                                 className="w-16 h-16 rounded-full mb-4 object-cover"
//                             />
//                             <h3 className="text-lg font-bold">{testimonial.name}</h3>
//                             <p className="text-sm text-gray-400">{testimonial.title}</p>

//                             <div className="flex gap-1 my-3">
//                                 {Array(testimonial.rating).fill(0).map((_, i) => (
//                                 <svg key={i} className="w-5 h-5 text-[#C3EB4D]" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                 </svg>
//                                 ))}
//                             </div>

//                             <p className="text-sm italic">"{testimonial.text}"</p>
//                         </div>
//                     </div>
//                 ))}
//                 </div>
//             </div>

//             <div className="embla__controls mt-8 flex justify-center gap-4">
//                 <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//                 <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//             </div>
//         </div>
//     )
// }

// export default EmblaCarousel
