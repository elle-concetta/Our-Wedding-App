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
      <>
        {/* First Section */}
        <section css={sendGiftWrapper(isOpen)}>
          <AnimatedDiv direction="down">
            <div className="hotel-container" style={{textAlign: "center"}}>
              <h1 style={{color: "#cb9956"}}>Book Hotel</h1>
              <p>
                Below is the booking link for the Beach House Fort Lauderdale, A Hilton Resort.
                The special rate code will be instantly applied when booking through this link.
                Contact us if you have any issues booking your room.
              </p>
              < br></br>
              <p>
                Here are some hotels that are next to or close to the Hilton Fort Lauderdale
                Beach Resort: W Fort Lauderdale, Conrad Fort Lauderdale Beach, The Westin Fort
                Lauderdale Beach, and Four Seasons Hotel and Residence.
              </p>
              <button
                  onClick={() => {
                    window.location.href =
                        "https://www.hilton.com/en/attend-my-event/fllfshh-zfwrb-429dbf9f-0603-4f6e-9d57-0f06b6d5f59c/"; // Replace with actual URL
                  }}
                  style={{
                    fontWeight: "bold",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#cb9956",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
              >
                Book Hotel
              </button>
            </div>
          </AnimatedDiv>
        </section>


        {/* Second Section */}
        <section css={sendGiftWrapper(isOpen)}>
          <AnimatedDiv direction="down">
            <div className="attire-container" style={{textAlign: "center"}}>
              <h1 style={{color: "#cb9956"}}>For the Hindu Ceremony</h1>
              <p>
                It isn't mandatory, but if you would like to purchase Indian wear
                for the Hindu Ceremony, you can shop online at Pernia's Pop-up
                Shop, Kalki Fashion, Aza, Nazranaa, G3 Fashion, Roopkala.net,
                Seasons India, or Samyakk.
              </p>
              < br></br>
              <p>Men wear kurtas, and women wear sarees, lehengas, or anarkalis.
                 If you need help choosing an outfit, contact Elle and we will
                 be delighted to help 🤍</p>

              <button
                  onClick={() => {
                    window.location.href =
                        "https://www.perniaspopupshop.com/";
                  }}
                  style={{
                    fontWeight: "bold",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#cb9956",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
              >
                Shop Now
              </button>
            </div>
          </AnimatedDiv>
        </section>


        {/* Third Section */}
        <section css={sendGiftWrapper(isOpen)}>
          <AnimatedDiv direction="up">
            <img src={imageWeddingGift} alt="" loading="lazy"/>

            <div className="gift-container">
              <h1>Gift Registry</h1>

              <p className="intro-gift">Our Amazon and Zola Gift Registry Below</p>

              <animated.div
                  ref={ref}
                  css={bankAccountWrapper}
                  style={animatedStyle}
              >
                <img src="/images/floating-qr.png" width="200" alt="qr-code"/>
              </animated.div>
            </div>

            <div className="col" style={{textAlign: "center"}}>
              <button
                  onClick={() => {
                    window.location.href =
                        "https://www.zola.com/registry/ankit-and-elle";
                  }}
                  style={{
                    fontWeight: "bold",
                    padding: "10px 20px",
                    fontSize: "16px",
                    color: "#cb9956",
                  }}
              >
                Visit Registry
              </button>
            </div>
          </AnimatedDiv>
        </section>
      </>
  );
};

export default SendGift;
