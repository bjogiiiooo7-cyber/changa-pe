/**
 * Game Rules Module
 * Enforces Ludo game rules
 */

import { isSafeSquare } from '../utils/helpers';

class GameRules {
  /**
   * Check if a pawn can move out of base
   * @param {number} diceValue - Dice value
   * @returns {boolean} True if can move out
   */
  static canMoveOutOfBase(diceValue) {
    return diceValue === 6;
  }

  /**
   * Check if all pawns of a player are home
   * @param {Array} playerPawns - Array of player pawns
   * @returns {boolean} True if all home
   */
  static allPawnsHome(playerPawns) {
    return playerPawns.every((pawn) => pawn.isHome);
  }

  /**
   * Validate a move
   * @param {Object} pawn - Pawn object
   * @param {number} diceValue - Dice value
   * @param {boolean} rolledSix - Whether rolled 6 before
   * @returns {boolean} True if move is valid
   */
  static isValidMove(pawn, diceValue, rolledSix = false) {
    // Can't move if already home
    if (pawn.isHome) {
      return false;
    }

    // Can move out if rolled 6 and in base
    if (pawn.position === -1 && diceValue === 6) {
      return true;
    }

    // Can move if not in base
    if (pawn.position >= 0 && pawn.position + diceValue <= 52) {
      return true;
    }

    return false;
  }

  /**
   * Check if move results in capture
   * @param {number} newPosition - New position
   * @param {Array} board - Board state
   * @param {number} playerIndex - Player index
   * @returns {boolean} True if capture occurs
   */
  static isCapture(newPosition, board, playerIndex) {
    // Safe squares prevent capture
    if (isSafeSquare(newPosition)) {
      return false;
    }

    // Check if any opponent pawn at this position
    return board.some(
      (pawn) => pawn.position === newPosition && pawn.playerIndex !== playerIndex
    );
  }

  /**
   * Check if position is safe
   * @param {number} position - Board position
   * @returns {boolean} True if safe
   */
  static isSafePosition(position) {
    return isSafeSquare(position);
  }
}

export default GameRules;
