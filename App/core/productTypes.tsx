export type ticketState = {
  tickets: oneTicket[];
  activeSide: number;
};

export type oneTicket = {
  train_info: string;
  way_from: string;
  way_to: string;
  departure_time: string;
  arrival_time: string;
  seat: string;
  name: string;
  price: string;
  train_car: string;
  qr_code_str: string;
  createdAt: number;
  side: number;
  isExpired: boolean;
};

export type Action = {
  type: string;
  tickets?: oneTicket[];
  activeSide?: number;
};
