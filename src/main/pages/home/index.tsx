import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Game} from '../../../domain/types';

import Card from './components/card';

const HomePage = () => {
  const game: Game = {
    title: 'Little Nightmares',
    image:
      'https://squared-potato.pt/wp-content/uploads/2019/10/Little-Nightmares-Destaque.jpg',
    price: {discount: 10, price: 100},
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Card game={game} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
