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
      isExpired: checkIsExpired(arr[3]),
    };
    return JSON.stringify(mainInfo);
  } catch (e) {
    console.warn('Неправильный QR код');
    return false;
  }
};

const splitStr = (str, by, elem) => str.split(by)[elem];

export const formatDate = (unix) => {
  const date = new Date(unix).toLocaleDateString('en-GB');
  const time = new Date(unix).toLocaleTimeString();
  return `${date} ${time}`;
};

const checkIsExpired = (date) => {
  const t1 = 1000;
  try {
    const dateAndTime = date.split(' ');
    const dayAndMonth = dateAndTime[0].split('.');
    const HourAndMinutes = dateAndTime[1].split(':');
    const today = new Date();
    const ticketUnix = new Date(
      `${today.getFullYear()}`,
      `${parseInt(dayAndMonth[1], 10) - 1}`,
      dayAndMonth[0],
      HourAndMinutes[0],
      HourAndMinutes[1],
    );
    return today.getTime() / t1 > ticketUnix.getTime() / t1;
  } catch (e) {
    return false;
  }
};