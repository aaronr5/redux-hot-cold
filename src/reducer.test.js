import reducer from './reducer';

import {
  newGame,
  makeGuess,
  toggleInfoModal
} from './actions';

describe('newGame', () => {
  it('Should reset state to start a new game', () => {
    let state = {
      guesses: [20, 30, 40],
      feedback: 'You\'re Hot!',
      correctAnswer: -1
    };

    state = reducer(state, newGame());
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.guesses).toEqual([]);
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });
});

describe('makeGuess', () => {
  it('Should make a guess', () => {
    let state = {
      guesses: [],
      feedback: '',
      correctAnswer: 100
    };

    state = reducer(state, makeGuess(50));
    expect(state.guesses).toEqual([50]);
    expect(state.feedback).toEqual('You\'re Ice Cold...');

    state = reducer(state, makeGuess(70));
    expect(state.guesses).toEqual([50, 70]);
    expect(state.feedback).toEqual('You\'re Cold...');

    state = reducer(state, makeGuess(90));
    expect(state.guesses).toEqual([50, 70, 90]);
    expect(state.feedback).toEqual('You\'re Warm');

    state = reducer(state, makeGuess(99));
    expect(state.guesses).toEqual([50, 70, 90, 99]);
    expect(state.feedback).toEqual('You\'re Hot!');

    state = reducer(state, makeGuess(100));
    expect(state.guesses).toEqual([50, 70, 90, 99, 100]);
    expect(state.feedback).toEqual('You got it!');

  });
});

describe('toggleInfoModal', () => {
  it('should toggle modal on', () => {
    let state = {
      showInfoModal: false
    };

    state = reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(true);
  });

  it('should toggle modal off', () => {
    let state = {
      showInfoModal: true
    };

    state = reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(false);
  });
});
