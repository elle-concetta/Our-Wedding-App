import { dateImages } from "src/constants/images";

import { EventDate } from "./types";

export const allDates: EventDate[] = [
  {
    id: "SNG_RSV",
    type: "SNG",
    title: "Welcome Party/Mendhi",
    when: "Friday, 7 November 2025",
    dateVertical:
      "<span>00</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "10:00 AM",
    place: "Florida",
    mapLink: "https://goo.gl/maps/",
    note: "...",
    images: dateImages.sng,
    whenDate: "07",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-07",
      startTime: "10:00",
      endTime: "12:00",
    },
  },
  {
    id: "KPL",
    type: "KPL",
    title: "Catholic Ceremony",
    when: "Friday, 7 November 2025",
    dateVertical:
      "<span>07</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "12:30 PM",
    place: "Florida",
    vendorName:"",
    mapLink: "https://goo.gl/maps/",
    note: "...",
    images: dateImages.kpl,
    whenDate: "07",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-07",
      startTime: "12:30",
      endTime: "13:30",
    },
  },
  {
    id: "KPL_RSV",
    type: "KPL",
    title: "Hindu Ceremony",
    when: "Saturday, 8 November 2025",
    dateVertical:
      "<span>07</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "10:00 AM",
    place: "Florida",
    vendorName:"",
    mapLink: "https://goo.gl/maps/",
    dresscode:"",
    images: dateImages.kplrsp,
    whenDate: "08",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-08",
      startTime: "10:00",
      endTime: "13:00",
    },
  },
  {
    id: "BHM_RSV",
    type: "BHM",
    title: "The Reception",
    when: "Saturday, 8 November 2025",
    dateVertical:
      "<span>08</span><br/><span class='month'>11</span><br/><span>25</span>",
    time: "6:00 PM",
    place:
      "Florida",
    vendorName:"",
    mapLink: "https://goo.gl/maps/",
    note: "...",
    images: dateImages.bhm,
    whenDate: "08",
    whenMonth: "Nov",
    rawDate: {
      startDate: "2025-11-08",
      startTime: "18:00",
      endTime: "22:00",
    },
  },
];
