import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedText from "src/components/AnimatedText";
import { imageCoupleIntro } from "src/constants/images";

import { styCoupleIntroWrapper } from "./styles";

const CoupleIntro = () => {
  return (
    <section css={styCoupleIntroWrapper}>
      <div className="top-intro">
          <div className="image-slider">
              <Swiper
                  className="slider"
                  modules={[Autoplay, EffectFade]}
                  autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                  }}
                  effect={"fade"}
                  fadeEffect={{crossFade: true}}
                  speed={1600}
                  loop={true}
              >
                  {imageCoupleIntro.map((image, idx) => (
                      <SwiperSlide key={`couple-intro-${idx}`}>
                          <img className="image" src={image} alt="" loading="lazy"/>
                      </SwiperSlide>
                  ))}
              </Swiper>
              <div className="wedding-name">ANKIT & ELLE</div>


          </div>
          <div className="right-container">
          <AnimatedText>
            <span className="intro-text decorative-1">THE WEDDING OF</span>
          </AnimatedText>
        </div>
      </div>

      <AnimatedText className="quote-intro" direction="left">
          અંકિત અને એલે
          <p>Our journey took a beautiful turn on August 28, 2021. That was the day of our first date in downtown Raleigh, NC. Then, on March 9, 2024 in Lake Como, Italy at Villa Olmo, Ankit proposed.</p>
      </AnimatedText>
    </section>
  );
};

export default CoupleIntro;
