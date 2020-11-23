import React from 'react';
import {render} from '@testing-library/react-native';

import Card from './';
import {Game} from '../../../../../domain/types';

const game: Game = {
  title: 'Zelda Breath of the Wild',
  image:
    'https://store.nintendo.com.br/media/catalog/product/cache/1aff59ff6f21b2058ac5563c018426d7/z/e/zeldabow_hero_2.jpg',
  price: {discount: 10, price: 300},
};

describe('Card', () => {
  it('ensure card title consistency', () => {
    const {getByTestId} = render(<Card game={game} />);
    const title = getByTestId('card-title');

    expect(title.children[0]).toBe('Zelda Breath of the Wild');
  });

  it('ensure card discount consistency', () => {
    const {getByTestId} = render(<Card game={game} />);
    const discount = getByTestId('card-discount');

    expect(discount.children[0]).toBe('de R$ 100,00');
  });

  it('must display the discount only if it is greater than zero', () => {
    const game: Game = {
      title: 'Super Metroid',
      image: '',
      price: {discount: 0, price: 300},
    };

    const {getByTestId} = render(<Card game={game} />);
    const discount = getByTestId('card-discount');

    expect(() => discount).toThrow();
  });

  it('ensure card total consistency', () => {
    const {getByTestId} = render(<Card game={game} />);
    const discount = getByTestId('card-total');

    expect(discount.children[0]).toBe('R$ 90,00');
  });

  it('must display free only if it is lower than zero', () => {
    const game: Game = {
      title: 'Super Metroid',
      image: '',
      price: {discount: 0, price: 0},
    };

    const {getByTestId} = render(<Card game={game} />);
    const discount = getByTestId('card-total');

    expect(discount.children[0]).toBe('Grátis');
  });
});
