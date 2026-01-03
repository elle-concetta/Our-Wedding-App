import { VenueObject } from "src/hooks/types";

export interface EventDate {
  id: string;
  type: keyof VenueObject;
  title: string;
  when: string;
  dateVertical: string;
  time: string;
  place: string;
  mapLink: string;
  images: string[];
  note: string;
  note_1: string;
  note_2: string;
  note_3: string;
  note_4: string;
  vendorName: string;
  dresscode: string;
  whenDate: string;
  whenMonth: string;
  rawDate: {
    startDate: string;
    startTime: string;
    endTime: string;
  };
}
