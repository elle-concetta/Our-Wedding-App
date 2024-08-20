import AnimatedText from "src/components/AnimatedText";

import { styQuoteIntroWrapper } from "./styles";

const QuoteIntro = () => {
  return (
    <section css={styQuoteIntroWrapper}>
      <AnimatedText className="quote-title">My Crazy Heart 🤍 Mann Mast Magan</AnimatedText>
      <AnimatedText className="quote-main">
          The translation of our song:
      </AnimatedText>
      <AnimatedText className="quote-translate">
          The fire of love burns everyday. How can one hide the rising smoke? My eyes are
          submissive to you, they ask for your permission. May the kohl and ink color the
          day, your musky eyes keep me up at night. My crazy heart, my crazy heart simply
          keeps repeating your name. My crazy heart, my crazy heart simply keeps repeating
          your name. It won't be able to forget you...
      </AnimatedText>
    </section>
  );
};

export default QuoteIntro;
