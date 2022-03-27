
export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO Date string
  delayed: boolean;
}
