export interface Event {
  id: string;
  title: string;
  url: string;
  imageURL: string;
  provider: Provider;
}

export type Provider =
  | "Ticketealo"
  | "Joinnus"
  | "Teleticket"
  | "Ticketmaster"
  | "Passline"
  | "Others";
