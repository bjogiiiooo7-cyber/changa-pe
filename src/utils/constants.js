// Game Constants
export const BOARD_SIZE = 52;
export const SAFE_SQUARES = [0, 8, 13, 21, 26, 34, 39, 47];
export const PLAYER_COLORS = ['#E74C3C', '#F39C12', '#27AE60', '#3498DB']; // Red, Yellow, Green, Blue
export const PLAYER_NAMES = ['Red', 'Yellow', 'Green', 'Blue'];

// Game States
export const GAME_STATES = {
  LOBBY: 'LOBBY',
  WAITING_FOR_TURN: 'WAITING_FOR_TURN',
  ROLLING_DICE: 'ROLLING_DICE',
  SELECTING_PAWN: 'SELECTING_PAWN',
  MOVING_PAWN: 'MOVING_PAWN',
  GAME_OVER: 'GAME_OVER',
};

// Multiplayer Types
export const MULTIPLAYER_TYPES = {
  LOCAL: 'local',
  NETWORK: 'network',
};

// Network Messages
export const NETWORK_MESSAGE_TYPES = {
  GAME_CREATED: 'GAME_CREATED',
  PLAYER_JOINED: 'PLAYER_JOINED',
  GAME_STARTED: 'GAME_STARTED',
  DICE_ROLLED: 'DICE_ROLLED',
  PAWN_MOVED: 'PAWN_MOVED',
  GAME_ENDED: 'GAME_ENDED',
  STATE_SYNC: 'STATE_SYNC',
  ERROR: 'ERROR',
};
