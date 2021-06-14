import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Swiper from 'react-native-swiper';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {TicketContext} from '../../core';
import {formatDate} from '../../utils';

type paramsList = {
  way: number;
  index: number;
  expired: boolean;
};

type Params = {
  params: paramsList;
};

interface Details {
  route: Params;
}

const Details = ({route}: Details) => {
  const {params} = route;
  const {way, index, expired} = params;
  const {state} = TicketContext();
  const {tickets} = state;

  return (
    <Swiper index={index} loop={false} key={tickets.length}>
      {tickets
        .filter(({side, isExpired}) => side === way && expired === isExpired)
        .map((ticket) => (
          <Card
            key={`${ticket.name}_${ticket.createdAt}`}
            containerStyle={styles.container}>
            <Card.Title style={styles.name}>{ticket.name}</Card.Title>
            <Card.Divider />
            <View style={styles.description}>
              <Text
                style={
                  styles.text
                }>{`${ticket.way_from} - ${ticket.way_to}`}</Text>
              <Text
                style={
                  styles.text
                }>{`${ticket.departure_time} - ${ticket.arrival_time}`}</Text>
              <Text style={styles.text}>{`Поезд: ${ticket.train_info}`}</Text>
              <Text style={styles.text}>{`Вагон: ${ticket.train_car}`}</Text>
              <Text style={styles.text}>{`Место: ${ticket.seat}`}</Text>
              <Text style={styles.text}>{`Билет создано в: ${formatDate(
                ticket.createdAt,
              )}`}</Text>
              <Text style={styles.text}>{`Цена: ${ticket.price} грн.`}</Text>
            </View>
            <Card.Divider />
            <View style={styles.qrcode}>
              <QRCode size={300} value={ticket.qr_code_str} />
            </View>
          </Card>
        ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 14,
  },
  description: {
    marginBottom: 15,
  },
  text: {
    fontWeight: 'bold',
  },
  name: {
    color: '#ffffff',
    backgroundColor: '#2f4f4f',
    padding: 8,
    borderRadius: 8,
  },
  qrcode: {
    height: 360,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Details;
