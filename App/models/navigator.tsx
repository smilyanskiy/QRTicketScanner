import {StackNavigationProp} from '@react-navigation/stack';

export enum Pages {
  Main = 'Main',
  QRScanner = 'QRScanner',
  Details = 'Details',
}

export type RootStackParamList = {
  Main: undefined;
  QRScanner: undefined;
  Details: {
    way: number;
    expired: boolean;
    index: number;
  };
};

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;
export type QRScanScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QRScanner'
>;
export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type mainProps = {
  navigation: MainScreenNavigationProp;
};

export type QRScanProps = {
  navigation: QRScanScreenNavigationProp;
};

export type DetailsProps = {
  navigation: DetailsScreenNavigationProp;
};
