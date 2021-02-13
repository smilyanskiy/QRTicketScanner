export const filterTicketInfo = (ticket, createdAt, activeSide) => {
  try {
    const arr = ticket.split(/[\r\n]+/).filter((item) => /\S/.test(item));
    const mainInfo = {
      train_info: splitStr(arr[0], ' ', 0),
      way_from: splitStr(arr[1], ' ', 1),
      way_to: splitStr(arr[2], ' ', 1),
      departure_time: arr[3],
      arrival_time: arr[4],
      train_car: splitStr(arr[5], ' ', 0),
      seat: splitStr(arr[6], ' ', 0),
      name: arr[8],
      price: arr[10],
      qr_code_str: ticket,
      createdAt,
      side: activeSide,
    };
    return JSON.stringify(mainInfo);
  } catch (e) {
    console.warn('wrong data');
    return false;
  }
};

const splitStr = (str, by, elem) => str.split(by)[elem];

export const formatDate = (unix) => {
  const date = new Date(unix).toLocaleDateString();
  const time = new Date(unix).toLocaleTimeString();
  return `${date} ${time}`;
};

// export const combineFromTo = (ticket, data) => {
//   const {from, to, client} = data;
//   const {name, way_from, way_to} = ticket;
//   const wayTo = from === way_from || from === way_to;
//   const wayFrom = to === way_to || to === way_from;
//   const FSnames = client === name;
//   return wayTo && wayFrom && FSnames;
// };
