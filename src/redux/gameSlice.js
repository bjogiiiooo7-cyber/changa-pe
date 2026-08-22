import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameId: null,
  gameType: null, // 'local' or 'network'
  gameState: 'LOBBY', // LOBBY, WAITING_FOR_TURN, ROLLING_DICE, SELECTING_PAWN, MOVING_PAWN, GAME_OVER
  currentPlayerIndex: 0,
  numberOfPlayers: 2,
  board: {
    squares: Array(52).fill(null), // Main board squares
    home: [[], [], [], []], // Home for each player (4 players)
    base: [[], [], [], []], // Base for each player
  },
  diceValue: 0,
  diceRolled: false,
  validMoves: [],
  winner: null,
  gameHistory: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state, action) => {
      const { numberOfPlayers, gameType } = action.payload;
      state.numberOfPlayers = numberOfPlayers;
      state.gameType = gameType;
      state.gameState = 'WAITING_FOR_TURN';
      state.currentPlayerIndex = 0;
      state.board.squares = Array(52).fill(null);
      state.board.home = [[], [], [], []];
      state.board.base = [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
      ];
    },
    rollDice: (state) => {
      state.diceValue = Math.floor(Math.random() * 6) + 1;
      state.diceRolled = true;
      state.gameState = 'SELECTING_PAWN';
    },
    movePawn: (state, action) => {
      const { fromPosition, toPosition, pawnId } = action.payload;
      state.gameState = 'MOVING_PAWN';
      state.gameHistory.push({
        playerIndex: state.currentPlayerIndex,
        pawnId,
        fromPosition,
        toPosition,
        diceValue: state.diceValue,
      });
    },
    completePawnMove: (state) => {
      state.diceRolled = false;
      state.gameState = 'WAITING_FOR_TURN';
      if (state.diceValue !== 6) {
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.numberOfPlayers;
      }
    },
    updateGameState: (state, action) => {
      state.gameState = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
      state.gameState = 'GAME_OVER';
    },
    resetGame: () => initialState,
  },
});

export const {
  initializeGame,
  rollDice,
  movePawn,
  completePawnMove,
  updateGameState,
  setWinner,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
