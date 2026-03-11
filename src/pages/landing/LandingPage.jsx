import ScrollBar from "@/components/ScrollBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import { useState, useRef } from "react";
import FAQSection from "./sections/FAQSection";

const TOTAL = 3;

const LandingPage = () => {
  const [current, setCurrent] = useState(0)
  const isScrolling = useRef(false) // 휠 이동 한번에 너무 많이 되는거 방지용 변수 

  const handleWheel = (e) => {
  if (isScrolling.current) return;

  isScrolling.current = true;

  if (e.deltaY > 0) handleNext();
  else handlePrev();

  setTimeout(() => {
    isScrolling.current = false;
  }, 800); //0.8초간 잠금
}; //새로만든 함수

  const handleNext = () => {
    if (current < TOTAL -1) setCurrent(prev => prev+1)
  }

  const handlePrev = () => {
    if (current > 0) setCurrent(prev => prev-1)
  }
  
  return (
    <div 
      className="h-screen overflow-hidden"
      // 마우스휠 감지해서 휠로도 위아래 섹션 이동 가능 (마우스 움직이는 만큼 스크롤할건지 섹션이동시킬건지)
      //onWheel={(e) => e.deltaY > 0 ? handleNext() : handlePrev()}
      onWheel={handleWheel}
      >
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{transform: `translateY(-${current * 100}vh)`}}
        >
          <HeroSection />
          <AboutSection />
          <FAQSection />
        </div>

        {current < TOTAL -1 && (
              <ScrollBar onClick={handleNext} />
        )}
     </div>
  )
}

export default LandingPage;