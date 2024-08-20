import { useInView, a } from "@react-spring/web";

import AnimatedDiv from "src/components/AnimatedDiv";
import AnimatedText from "src/components/AnimatedText";
import IconInstagram from "src/components/svgs/IconInstagram";
import { animLeftToRight, animRightToLeft } from "src/constants/animation";
import { imageBride, imageGroom } from "src/constants/images";
import { track } from "src/helpers/trackers";
import useReceiver from "src/hooks/useReceiver";

import { styCoupleInfoWrapper, styProfilesWrapper } from "./styles";

const CoupleInformation = () => {
  const [ref1, springs1] = useInView(animRightToLeft);
  const [ref2, springs2] = useInView(animLeftToRight);
  const { receiver } = useReceiver();

  const handleInstagramClicked = (url: string) => {
    track("click", {
      name: "open instagram",
      receiver,
    });

    window.open(url);
  };

  return (
    <section css={styCoupleInfoWrapper}>
      <div className="profile right-dir">
        <div css={styProfilesWrapper} className="right-dir">
          <div>
            <AnimatedText>
              <span className="text-decorative">THE GROOM</span>
            </AnimatedText>
          </div>
          <a.div ref={ref1} style={springs1} className="image-slider">
            <img className="image" src={imageGroom} alt="" loading="lazy" />
          </a.div>
        </div>

        <div className="profile-information">
          <AnimatedDiv className="instagram">
            <div
              onClick={() =>
                handleInstagramClicked("https://instagram.com/ankit.amin.750")
              }
            >
              <IconInstagram />
              <span>Ankit Amin</span>
            </div>
          </AnimatedDiv>

          <AnimatedText className="profile-name">
            Ankit Mahattej Amin
          </AnimatedText>
          <AnimatedText className="profile-subname">The son of:</AnimatedText>
          <AnimatedText className="profile-parent">
            Mahattej Kumar Amin
          </AnimatedText>
          <AnimatedText className="profile-parent">Jollyben Amin</AnimatedText>
        </div>
      </div>

      <div className="profile left-dir">
        <div css={styProfilesWrapper} className="left-dir">
          <a.div ref={ref2} style={springs2} className="image-slider">
            <img className="image" src={imageBride} alt="" loading="lazy" />
          </a.div>
          <div>
            <AnimatedText>
              <span className="text-decorative">THE BRIDE</span>
            </AnimatedText>
          </div>
        </div>

        <div className="profile-information">
          <AnimatedDiv className="instagram">
            <div
              onClick={() =>
                handleInstagramClicked("https://instagram.com/elle.concetta")
              }
            >
              <IconInstagram />
              <span>Elle Fassler</span>
            </div>
          </AnimatedDiv>

          <AnimatedText className="profile-name">
            Elizabeth Concetta Fassler
          </AnimatedText>
          <AnimatedText className="profile-subname">
            The daughter of:
          </AnimatedText>
          <AnimatedText className="profile-parent">
            Andrew (Bernie) Fassler
          </AnimatedText>
          <AnimatedText className="profile-parent">
            Amy Kristine Eppers
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default CoupleInformation;
