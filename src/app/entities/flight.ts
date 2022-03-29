
export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO Date string
  delayed: boolean;
}

export const initialFlight: Flight = {
  id: 0,
  from: '',
  to: '',
  date: '',
  delayed: false
};
