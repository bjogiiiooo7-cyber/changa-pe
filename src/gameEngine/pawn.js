/**
 * Pawn Module
 * Handles individual pawn logic
 */

class Pawn {
  constructor(id, playerIndex, color) {
    this.id = id;
    this.playerIndex = playerIndex;
    this.color = color;
    this.position = -1; // -1 means in base
    this.isHome = false;
    this.isCaptured = false;
  }

  /**
   * Move pawn by dice value
   * @param {number} steps - Number of steps to move
   */
  move(steps) {
    if (this.position === -1) {
      this.position = 0; // Bring to board
    } else if (!this.isHome) {
      this.position += steps;
    }
  }

  /**
   * Move pawn to home
   */
  moveToHome() {
    this.isHome = true;
    this.position = -1;
  }

  /**
   * Capture the pawn (send back to base)
   */
  capture() {
    this.isCaptured = true;
    this.position = -1;
    this.isHome = false;
  }

  /**
   * Get pawn state
   * @returns {Object} Pawn state
   */
  getState() {
    return {
      id: this.id,
      playerIndex: this.playerIndex,
      color: this.color,
      position: this.position,
      isHome: this.isHome,
      isCaptured: this.isCaptured,
    };
  }
}

export default Pawn;
