import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import securityVessel from "../../assets/security-vessel.jpeg";
import crewBoat from "../../assets/crew-boat.jpg";

const OurCatalogue = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  
  const catalogue = [
    { name: "PSV (Platform Supply Vessel)", description: "Platform Supply Vessels are used for supplying offshore platforms with personnel, equipment, and supplies.", image: "" },
    { name: "AHTS (Anchor Handling Tug Supply)", description: "Anchor Handling Tug Supply vessels are designed for towing and handling anchors for offshore platforms.", image: "" },
    { name: "MPSV (Multi-Purpose Support Vessel)", description: "Multi-Purpose Support Vessels are versatile ships designed for various offshore support tasks.", image: "" },
    { name: "Security Vessels", description: "Security vessels provide protection and surveillance for offshore installations and operations.", image: securityVessel },
    { name: "Oil Tankers", description: "Oil tankers are ships designed for the bulk transport of oil and its derivatives.", image: "" },
    { name: "Crew Transfer Vessels", description: "Crew Transfer Vessels are used for transporting personnel to and from offshore platforms.", image: crewBoat },
    // { name: "Drilling Rigs", description: "Drilling rigs are used for drilling wells in the exploration and production of oil and gas.", image: "" },
    { name: "Diving Support Vessels", description: "Diving Support Vessels provide support for diving operations, including decompression chambers.", image: "" },
    { name: "ROV Support Vessels", description: "Remote Operated Vehicles Support Vessels are equipped to support remotely operated vehicles for underwater inspections.", image: "" },
  ];

  // Responsive breakpoints
  const [slidesToShow, setSlidesToShow] = useState(4);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1.5);
      else if (window.innerWidth < 768) setSlidesToShow(3);
      else if (window.innerWidth < 1024) setSlidesToShow(4);
      else setSlidesToShow(6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,           // Infinite loop
    align: 'start',
    dragFree: true,     
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 1 },
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 },
    }
  });

  // Update scroll snaps when emblaApi is ready
  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Handle dot click navigation
  const scrollTo = useCallback((index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Calculate slide width based on slidesToShow
  const slideWidth = `${100 / slidesToShow}%`;

  return (
    <section className='container pb-0! flex flex-col items-start'>
      <h2 className="section-title">Our Catalogue</h2>
      
      <div className="w-full relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex" style={{ marginLeft: 'calc(var(--slide-spacing) * -1)' }}>
            {catalogue.map((item, index) => (
              <div 
                key={index}
                className="shrink-0 px-2"
                style={{ flex: `0 0 ${slideWidth}` }}
              >
                <div className="mb-4 w-full flex flex-col gap-1">
                  <img 
                    src={item?.image || "https://placehold.co/400"} 
                    alt={""} 
                    className="w-full h-40 object-cover rounded-sm bg-gray-300" 
                    draggable="false"
                  />
                  <h4 className="text-base md:text-lg font-semibold line-clamp-2">{item.name}</h4>
                  <p className="text-sm text-navy-500 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dotted Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'w-6 bg-navy-700' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCatalogue;