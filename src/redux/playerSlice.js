import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: [],
  scores: {},
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      state.players = action.payload;
      action.payload.forEach((player) => {
        state.scores[player.id] = 0;
      });
    },
    updatePlayerScore: (state, action) => {
      const { playerId, score } = action.payload;
      state.scores[playerId] = score;
    },
    updatePlayerStatus: (state, action) => {
      const { playerId, status } = action.payload;
      const player = state.players.find((p) => p.id === playerId);
      if (player) {
        player.status = status;
      }
    },
    resetPlayers: () => initialState,
  },
});

export const {
  addPlayers,
  updatePlayerScore,
  updatePlayerStatus,
  resetPlayers,
} = playerSlice.actions;

export default playerSlice.reducer;
