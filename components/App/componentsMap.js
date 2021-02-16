import Main from '../Main';
import QRScanner from '../QRScanner';
import Details from '../Details';

const headerTintColor = '#ffffff';
const backgroundColor = '#2a2e7e';

export const NAVIGATIONS = [
  {
    name: 'Main',
    component: Main,
    options: {
      title: 'Билеты',
      headerTintColor,
      headerStyle: {
        backgroundColor,
      },
    },
  },
  {
    name: 'QRScanner',
    component: QRScanner,
    options: {
      title: 'QR Сканер',
      headerTintColor,
      headerStyle: {
        backgroundColor,
      },
    },
  },
  {
    name: 'Details',
    component: Details,
    options: {
      title: 'Информация по билету',
      headerTintColor,
      headerStyle: {
        backgroundColor,
      },
    },
  },
];
