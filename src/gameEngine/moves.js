/**
 * Moves Module
 * Calculate valid moves and handle movement logic
 */

class Moves {
  /**
   * Get valid moves for a player
   * @param {Array} playerPawns - Player's pawns
   * @param {number} diceValue - Dice value
   * @returns {Array} Valid pawn IDs that can move
   */
  static getValidMoves(playerPawns, diceValue) {
    const validMoves = [];

    playerPawns.forEach((pawn) => {
      // Pawn in base and rolled 6
      if (pawn.position === -1 && diceValue === 6) {
        validMoves.push(pawn.id);
      }
      // Pawn on board and new position is valid
      else if (pawn.position >= 0 && pawn.position + diceValue <= 52) {
        validMoves.push(pawn.id);
      }
    });

    return validMoves;
  }

  /**
   * Calculate new position after move
   * @param {number} currentPosition - Current position (-1 for base)
   * @param {number} diceValue - Dice value
   * @returns {number} New position
   */
  static calculateNewPosition(currentPosition, diceValue) {
    if (currentPosition === -1) {
      return 0; // Bring to start
    }
    return currentPosition + diceValue;
  }

  /**
   * Check if pawn reached home
   * @param {number} newPosition - New position
   * @returns {boolean} True if at home
   */
  static isAtHome(newPosition) {
    return newPosition === 52 || newPosition > 52;
  }

  /**
   * Get animation duration for pawn movement
   * @param {number} distance - Distance to move
   * @returns {number} Duration in milliseconds
   */
  static getAnimationDuration(distance) {
    return distance * 100; // 100ms per square
  }
}

export default Moves;
