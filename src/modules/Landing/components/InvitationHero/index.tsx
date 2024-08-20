import { useCallback, useEffect, useState } from "react";

import { useSpring } from "@react-spring/web";
import { useLockBodyScroll } from "react-use";

import AnimatedTrail from "src/components/AnimatedTrail";
import { track } from "src/helpers/trackers";
import useReceiver from "src/hooks/useReceiver";
import { useMusic } from "src/providers/music";

import { AnimatedInvitationHeroWrapper } from "./styles";

const InvitationHero = () => {
  const { handleSoundPlay } = useMusic();
  const [height, setHeight] = useState(`100vh`);
  const [bodyLocked, setBodyLocked] = useState(true);
  const [appear, setAppear] = useState(true);
  const { receiver } = useReceiver();

  const [style, animation] = useSpring(() => ({
    top: "0px",
    config: { mass: 5, tension: 2000, friction: 600 },
  }));

  useLockBodyScroll(bodyLocked);

  useEffect(() => {
    if (typeof document !== undefined) {
      const actualHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight ||
        document.body.offsetHeight;

      setHeight(`${actualHeight}px`);
    }
  }, []);

  const handleOpenInvitation = useCallback(() => {
    handleSoundPlay();
    animation.start({
      top: `-${height}`,
    });
    setBodyLocked(false);
    setAppear(false);
    track("click", {
      name: "Open Invitation",
      receiver,
    });
  }, [animation, handleSoundPlay, height, receiver]);

  return (
    <AnimatedInvitationHeroWrapper
      height={height}
      appear={`${appear}`}
      style={style}
    >
      <section className="top">
        <AnimatedTrail open={true}>
          <p className="subtitle">THE WEDDING OF</p>
          <h1>
            Ankit <span className="and">&</span> Elle
          </h1>
        </AnimatedTrail>
      </section>

      <img
        src="/images/cover-website.png"
        alt="landing banner"
        loading="eager"
      />

      <section className="bottom" >
        <AnimatedTrail open={true}>
          <p>November 2025</p>
          <p>Florida</p>

          <button onClick={handleOpenInvitation}>Open Invitation</button>
        </AnimatedTrail>
      </section>
    </AnimatedInvitationHeroWrapper>
  );
};

export default InvitationHero;
