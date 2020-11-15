import { Card } from './../../card/types/Card.type';
import { getFibonacciNumber } from './getFibonacciNumber.lib';

const MS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

const getCardNextCheckTimeInMs = (card: Card): number =>
  card.lastFailureAt + (getFibonacciNumber(card.level) - 1) * MS_IN_ONE_DAY;

export const getNextCardToPlayFromCards = (cards: Card[]): Card | undefined => {
  const currentMsTime = new Date().getTime();
  return cards
    .filter((card) => currentMsTime >= getCardNextCheckTimeInMs(card))
    .sort((card1, card2) => {
      const card1Delta = currentMsTime - card1.lastFailureAt + card1.level * MS_IN_ONE_DAY;
      const card2Delta = currentMsTime - card2.lastFailureAt + card2.level * MS_IN_ONE_DAY;
      return card1Delta - card2Delta;
    })
    .pop();
};
