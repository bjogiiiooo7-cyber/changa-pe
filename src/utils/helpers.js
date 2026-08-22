// Helper Functions

/**
 * Calculate the next position for a pawn
 * @param {number} currentPosition - Current position on the board
 * @param {number} diceValue - Value rolled on the dice
 * @returns {number} New position
 */
export const calculateNextPosition = (currentPosition, diceValue) => {
  return currentPosition + diceValue;
};

/**
 * Check if a square is a safe square
 * @param {number} square - Square position
 * @returns {boolean} True if safe
 */
export const isSafeSquare = (square) => {
  const SAFE_SQUARES = [0, 8, 13, 21, 26, 34, 39, 47];
  return SAFE_SQUARES.includes(square);
};

/**
 * Check if a pawn can be moved
 * @param {number} diceValue - Value rolled on the dice
 * @param {boolean} pawnOutOfBase - Whether pawn is out of base
 * @returns {boolean} True if pawn can move
 */
export const canMovePawn = (diceValue, pawnOutOfBase) => {
  if (!pawnOutOfBase && diceValue !== 6) {
    return false;
  }
  return true;
};

/**
 * Format game code for display
 * @param {string} gameId - Game ID
 * @returns {string} Formatted game code
 */
export const formatGameCode = (gameId) => {
  return gameId.substring(0, 6).toUpperCase();
};

/**
 * Get player color by index
 * @param {number} playerIndex - Player index (0-3)
 * @returns {string} Color hex code
 */
export const getPlayerColor = (playerIndex) => {
  const colors = ['#E74C3C', '#F39C12', '#27AE60', '#3498DB'];
  return colors[playerIndex % 4];
};

/**
 * Validate game code format
 * @param {string} gameCode - Game code to validate
 * @returns {boolean} True if valid
 */
export const isValidGameCode = (gameCode) => {
  return /^[A-Z0-9]{6}$/.test(gameCode);
};
