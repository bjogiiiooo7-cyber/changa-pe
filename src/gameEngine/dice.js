/**
 * Dice Module
 * Handles dice rolling mechanics
 */

class Dice {
  constructor() {
    this.lastValue = 0;
  }

  /**
   * Roll the dice
   * @returns {number} Value between 1 and 6
   */
  roll() {
    this.lastValue = Math.floor(Math.random() * 6) + 1;
    return this.lastValue;
  }

  /**
   * Get the last rolled value
   * @returns {number} Last dice value
   */
  getLastValue() {
    return this.lastValue;
  }

  /**
   * Check if last roll was a 6
   * @returns {boolean} True if last roll was 6
   */
  isDouble() {
    return this.lastValue === 6;
  }

  /**
   * Reset dice to initial state
   */
  reset() {
    this.lastValue = 0;
  }
}

export default Dice;
