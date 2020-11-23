import React, {memo} from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';
import {Game} from '../../../../../domain/types';

type Props = {
  game: Game;
  onPress?(game: Game): void;
};

const Card = ({game, onPress}: Props) => {
  return (
    <View testID="card" style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (onPress) onPress(game);
        }}>
        <Image
          testID="card-image"
          style={styles.image}
          source={{uri: game.image}}
        />
        <View style={styles.content}>
          <Text testID="card-title" style={styles.title}>
            {game.title}
          </Text>
          <Text testID="card-discount" style={styles.discount}>
            de R$ 100,00
          </Text>
          <Text testID="card-total" style={styles.total}>
            R$ 90,00
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: {height: 10, width: 0},
    shadowOpacity: 0.3,
  },
  image: {
    aspectRatio: 1.4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  content: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 8,
  },
  discount: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  total: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0091FF',
  },
});

export default memo(Card);
