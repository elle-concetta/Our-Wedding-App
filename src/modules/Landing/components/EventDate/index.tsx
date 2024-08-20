import { allDates } from "./constants";
import { styEventDateWrapper } from "./styles";
import EventCard from "./widgets/EventCard";

const EventDate = () => {
  return (
    <section css={styEventDateWrapper}>
      <h1>Save The Date</h1>

      {allDates.map((date, idx) => (
        <EventCard date={date} index={idx} key={`date-${idx}`} />
      ))}
    </section>
  );
};

export default EventDate;
