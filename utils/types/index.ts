export interface Event {
  id: string;
  title: string;
  url: string;
  imageURL: string;
  provider:
    | "Ticketealo"
    | "Joinnus"
    | "Teleticket"
    | "Ticketmaster"
    | "Passline"
    | "Others";
}
