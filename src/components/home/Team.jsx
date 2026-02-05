import React, { useEffect } from 'react';
import team01 from "../../assets/team/team-01.jpg";
import team02 from "../../assets/team/team-02.jpg";
import team03 from "../../assets/team/team-03.jpg";
import team04 from "../../assets/team/team-04.jpg";
import team05 from "../../assets/team/team-05.jpg";
import team06 from "../../assets/team/team-06.jpg";

// import useEmblaCarousel from 'embla-carousel-react';

import EmblaCarousel from './EmblaCarousel.jsx';
// import './embla.css'
// import Autoplay from 'embla-carousel-react';
// import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'



const Team = () => {
  const OPTIONS = { align: 'center', loop: true, }
  // const SLIDE_COUNT = 6
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const team = [
    {
      id: 1,
      name: "Kylee Danford",
      role: "Director/C.E.O",
      image: team01
    },
    {
      id: 2,
      name: "John Barkery",
      role: "Survey Director",
      image: team02,
    },
    {
      id: 3,
      name: "James Dean",
      role: "Systems Engineer",
      image: team03,
    },
    // {
    //   id: 4,
    //   name: "",
    //   role: "Electrical Engineer",
    //   image: team04,
    // },
    // {
    //   id: 5,
    //   name: "Tasha Mercor",
    //   role: "Public Relations",
    //   image: team05,
    // },
    // {
    //   id: 6,
    //   name: "Sarah Doe",
    //   role: "Safety Inspector",
    //   image: team06,
    // },
  ]



  return (
    <section className='container pb-0!'>
      <div className="text-center">
        {/* <h2 className="section-title">Professional Endorsements</h2> */}
        {/* <h2 className="section-title"> What Our Clients Say </h2> */}
        <h2 className='section-title'> Meet Our Team </h2>
        <p className="section-subtitle">
          With over a decade of offshore experience. Our officers are trained and certified by Lloyd’s Maritime Academy
        </p>
      </div>


      <EmblaCarousel slides={team} options={OPTIONS} />

    </section>
  )
}

export default Team;