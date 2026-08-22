/**
 * Game Sync Module
 * Synchronizes game state across network players
 */

import SocketManager from './socketManager';
import { MESSAGE_TYPES } from './messageTypes';

class GameSync {
  constructor(socketManager) {
    this.socketManager = socketManager;
    this.localState = null;
    this.remoteState = null;
  }

  /**
   * Sync local state to server
   * @param {Object} gameState - Current game state
   */
  syncLocalState(gameState) {
    this.localState = gameState;
    this.socketManager.send(MESSAGE_TYPES.STATE_UPDATE, gameState);
  }

  /**
   * Update state from remote
   * @param {Object} remoteState - Remote game state
   */
  updateRemoteState(remoteState) {
    this.remoteState = remoteState;
  }

  /**
   * Get merged state
   * @returns {Object} Merged state
   */
  getMergedState() {
    if (!this.remoteState) {
      return this.localState;
    }
    // Remote state takes precedence for game state
    return {
      ...this.localState,
      ...this.remoteState,
    };
  }

  /**
   * Check if states are in sync
   * @returns {boolean} True if in sync
   */
  isInSync() {
    if (!this.remoteState || !this.localState) {
      return false;
    }
    return JSON.stringify(this.localState) === JSON.stringify(this.remoteState);
  }
}

export default GameSync;
