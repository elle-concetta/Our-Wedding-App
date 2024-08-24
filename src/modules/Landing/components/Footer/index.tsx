import { ParallaxBanner } from "react-scroll-parallax";

import AnimatedDiv from "src/components/AnimatedDiv";
import AnimatedText from "src/components/AnimatedText";
import { imageFooter } from "src/constants/images";

import { styFooterWrapper } from "./styles";

const Footer = () => {
  return (
    <section css={styFooterWrapper}>
      <ParallaxBanner
        layers={[{ image: imageFooter, speed: -10 }]}
        className="banner"
      />
      <div className="description">
        <AnimatedDiv>
          <h1>🤍</h1>
        </AnimatedDiv>
        <AnimatedText>
            Join us as we celebrate a love that’s blossomed into forever – we’re tying the knot and can’t wait to share this magical day with you!
        </AnimatedText>
        <AnimatedDiv className="regards">
          <p>Sincerely,</p>
          <p>
            <b>Ankit & Elle</b>
          </p>
            <p style={{backgroundColor: "black", color: "white"}}>
                &copy; 2024 Created with 🤍 by{" "}
                <a
                    href="https://github.com/elle-concetta"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: "white"}}
                >
                    Elle
                </a>
            </p>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Footer;
