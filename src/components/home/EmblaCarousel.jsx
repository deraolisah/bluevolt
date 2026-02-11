import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton.jsx'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="mx-auto">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom space-x-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_84%] sm:flex-[0_0_50%] px-1 md:flex-[0_0_33%] lg:flex-[0_0_calc(100%/4)]"
            >
              <div className="flex flex-col items-start justify-end gap-4 h-78 relative rounded-lg overflow-hidden">
                <img src={slide.image} alt='' className='w-full h-full absolute object-cover' />
                <div className='space-y-0.5 z-2 p-4 w-full text-white bg-black/5 backdrop-blur-sm rounded-t-xl border-t border-gray-300/40'>
                  <h3 className='font-medium'> {slide.name || "John Doe"} </h3>
                  <p className='font-light text-white/80 text-sm'> {slide.role || "Job/Role"} </p>
                </div>
                {/* <span>{index + 1}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center justify-between gap-5 mt-4.5 md:mt-6">
        {/* Arrow Buttons */}
        <div className="hidden grid-cols-2 gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* Dots */}
        <div className="w-full flex justify-center items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full relative
                appearance-none bg-transparent touch-manipulation 
                no-underline cursor-pointer border-0 p-0 m-0
                tap-highlight-transparent
                ${index === selectedIndex ? 'after:opacity-100 after:bg-navy-700' : 'after:opacity-0'}
                before:content-[''] before:w-3 before:h-3 md:before:w-4 md:before:h-4 before:rounded-full 
                before:border-2 before:border-gray-300 before:absolute
                after:content-[''] after:w-3 after:h-3 md:after:w-4 md:after:h-4 after:rounded-full 
                after:border-2 after:border-navy-700 after:absolute`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel