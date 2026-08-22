import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import playerReducer from './playerSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
    players: playerReducer,
  },
});

export default store;
