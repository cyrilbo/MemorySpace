import MockDate from 'mockdate';
import { getCardMock } from './../../card/data/mocks/card.mock';
import { getNextCardToPlayFromCards } from './getNextCardToPlayFromCards.lib';

MockDate.set('2019-04-22T10:20:30Z');

describe('getNextCardToPlayFromCards', () => {
  it('returns undefined when an empty array is passed in input', () => {
    expect(getNextCardToPlayFromCards([])).toBeUndefined();
  });

  it('returns undefined when an already reviewed card is passed in input', () => {
    const card1 = getCardMock({ lastFailureAt: new Date('2019-04-23T10:20:30Z').getTime() });
    const card2 = getCardMock({
      lastFailureAt: new Date('2019-04-21T10:20:30Z').getTime(),
      level: 2,
    });
    expect(getNextCardToPlayFromCards([card1, card2])).toBeUndefined();
  });

  it('returns the only card passed in argument when it is not reviewed', () => {
    const card = getCardMock({ lastFailureAt: new Date('2019-04-21T10:20:30Z').getTime() });
    expect(getNextCardToPlayFromCards([card])).toEqual(card);
  });

  it('returns the card not reviewed for the longest time', () => {
    const card1 = getCardMock({ lastFailureAt: new Date('2019-04-21T10:20:30Z').getTime() });
    const card2 = getCardMock({
      lastFailureAt: new Date('2019-04-20T10:20:30Z').getTime(),
      level: 2,
    });
    expect(getNextCardToPlayFromCards([card1, card2])).toEqual(card2);
    expect(getNextCardToPlayFromCards([card2, card1])).toEqual(card2);
  });
});
