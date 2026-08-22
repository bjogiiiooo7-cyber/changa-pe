/**
 * Board Module
 * Manages the game board and pawn positions
 */

import Pawn from './pawn';

class Board {
  constructor(numberOfPlayers = 4) {
    this.numberOfPlayers = numberOfPlayers;
    this.pawns = this.initializePawns();
    this.squares = Array(52).fill([]);
  }

  /**
   * Initialize pawns for all players
   * @returns {Array} Array of pawns
   */
  initializePawns() {
    const pawns = [];
    const colors = ['#E74C3C', '#F39C12', '#27AE60', '#3498DB'];

    for (let i = 0; i < this.numberOfPlayers; i++) {
      for (let j = 0; j < 4; j++) {
        const pawnId = `${i}-${j}`;
        pawns.push(new Pawn(pawnId, i, colors[i]));
      }
    }

    return pawns;
  }

  /**
   * Get all pawns for a specific player
   * @param {number} playerIndex - Player index
   * @returns {Array} Array of pawns
   */
  getPlayerPawns(playerIndex) {
    return this.pawns.filter((pawn) => pawn.playerIndex === playerIndex);
  }

  /**
   * Move a pawn
   * @param {string} pawnId - Pawn ID
   * @param {number} steps - Number of steps
   */
  movePawn(pawnId, steps) {
    const pawn = this.pawns.find((p) => p.id === pawnId);
    if (pawn) {
      pawn.move(steps);
    }
  }

  /**
   * Check for captured pawns at a position
   * @param {number} position - Board position
   * @param {number} playerIndex - Player index
   * @returns {Array} Captured pawns
   */
  checkCaptures(position, playerIndex) {
    const capturedPawns = [];
    this.pawns.forEach((pawn) => {
      if (
        pawn.position === position &&
        pawn.playerIndex !== playerIndex &&
        !pawn.isHome
      ) {
        pawn.capture();
        capturedPawns.push(pawn);
      }
    });
    return capturedPawns;
  }

  /**
   * Get board state
   * @returns {Object} Board state
   */
  getState() {
    return {
      pawns: this.pawns.map((pawn) => pawn.getState()),
      numberOfPlayers: this.numberOfPlayers,
    };
  }
}

export default Board;
