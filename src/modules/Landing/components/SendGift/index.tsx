import React, { useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { imageWeddingGift } from "src/constants/images";
import { bankAccountWrapper, sendGiftWrapper } from "./styles";
import AnimatedDiv from "src/components/AnimatedDiv";

const SendGift: React.FC = () => {
  const isOpen = true; // Replace with your actual state or prop
  const ref = useRef<HTMLDivElement>(null);

  const animatedStyle = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0px)" : "translateY(-20px)",
  });

  return (
      <section css={sendGiftWrapper(isOpen)}>
        <AnimatedDiv direction="up">
          <img src={imageWeddingGift} alt="" loading="lazy" />

          <div className="gift-container">
            <h1>Gift Registry</h1>

            <p className="intro-gift">Our Amazon Gift Registry Below</p>

            <animated.div
                ref={ref}
                css={bankAccountWrapper}
                style={animatedStyle}
            >
              <img
                  src="/images/floating-qr.png"
                  width="200"
                  alt="qr-code"
              />
            </animated.div>
          </div>

          <div className="col" style={{ textAlign: "center" }}>
            <button
                onClick={() => {
                  window.location.href = "https://www.amazon.com/wedding/share/ankit-and-elle";
                }}
                style={{
                  fontWeight: "bold",
                  padding: "10px 20px",
                  fontSize: "16px",
                }}
            >
              Visit Registry
            </button>
          </div>
        </AnimatedDiv>
      </section>
  );
};

export default SendGift;
