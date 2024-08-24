import { dateImages } from "src/constants/images";

import { EventDate } from "./types";

export const allDates: EventDate[] = [
  {
      id: "KPL",
      type: "KPL",
      title: "Catholic Ceremony",
      when: "Friday, November 2025 - Official dates and times coming soon.",
      dateVertical:
          "<span>00</span><br/><span class='month'>11</span><br/><span>25</span>",
      time: "00:00 AM",
      place: "Florida",
      vendorName:"",
      mapLink: "https://goo.gl/maps/",
      note: "...",
      images: dateImages.kpl,
      whenDate: "00",
      whenMonth: "Nov",
      rawDate: {
        startDate: "2025-11-00",
        startTime: "00:00",
        endTime: "00:00",
    },
  },
  {
    id: "SNG_RSV",
    type: "SNG",
    title: "Welcome Party (Sangeet)",
    when: "Friday, November 2025 - Official dates and times coming soon.",
    dateVertical:
        "<span>00</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "00:00 AM",
    place: "Florida",
    mapLink: "https://goo.gl/maps/",
    note: "...",
    images: dateImages.sng,
    whenDate: "00",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-00",
      startTime: "00:00",
      endTime: "00:00",
    },
  },
  {
    id: "KPL_RSV",
    type: "KPL",
    title: "Hindu Ceremony",
    when: "Saturday, November 2025 - Official dates and times coming soon.",
    dateVertical:
      "<span>00</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "00:00 AM",
    place: "Florida",
    vendorName:"",
    mapLink: "https://goo.gl/maps/",
    dresscode:"",
    images: dateImages.kplrsp,
    whenDate: "00",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-00",
      startTime: "00:00",
      endTime: "00:00",
    },
  },
  {
    id: "BHM_RSV",
    type: "BHM",
    title: "The Reception",
    when: "Saturday, November 2025  - Official dates and times coming soon.",
    dateVertical:
      "<span>00</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "0:00 PM",
    place:
      "Florida",
    vendorName:"",
    mapLink: "https://goo.gl/maps/",
    note: "...",
    images: dateImages.bhm,
    whenDate: "00",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-00",
      startTime: "00:00",
      endTime: "00:00",
    },
  },
];
