/**
 * Socket Manager
 * Handles all Socket.io connections and communications
 */

import io from 'socket.io-client';
import { MESSAGE_TYPES } from './messageTypes';

class SocketManager {
  constructor(serverUrl = 'http://localhost:3000') {
    this.socket = null;
    this.serverUrl = serverUrl;
    this.listeners = {};
    this.isConnected = false;
  }

  /**
   * Connect to server
   */
  connect() {
    this.socket = io(this.serverUrl, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      this.isConnected = true;
      this.emit('connected');
    });

    this.socket.on('disconnect', () => {
      this.isConnected = false;
      this.emit('disconnected');
    });

    this.socket.on('error', (error) => {
      this.emit('error', error);
    });
  }

  /**
   * Disconnect from server
   */
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.isConnected = false;
    }
  }

  /**
   * Send a message
   * @param {string} messageType - Type of message
   * @param {Object} data - Message data
   */
  send(messageType, data = {}) {
    if (this.socket && this.isConnected) {
      this.socket.emit(messageType, data);
    }
  }

  /**
   * Listen to a message type
   * @param {string} messageType - Type of message
   * @param {Function} callback - Callback function
   */
  on(messageType, callback) {
    if (!this.listeners[messageType]) {
      this.listeners[messageType] = [];
    }
    this.listeners[messageType].push(callback);

    if (this.socket) {
      this.socket.on(messageType, callback);
    }
  }

  /**
   * Remove listener
   * @param {string} messageType - Type of message
   * @param {Function} callback - Callback function
   */
  off(messageType, callback) {
    if (this.listeners[messageType]) {
      this.listeners[messageType] = this.listeners[messageType].filter(
        (cb) => cb !== callback
      );
    }

    if (this.socket) {
      this.socket.off(messageType, callback);
    }
  }

  /**
   * Emit event to listeners
   * @param {string} event - Event name
   * @param {*} data - Event data
   */
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(data));
    }
  }

  /**
   * Check if connected
   * @returns {boolean} Connection status
   */
  isConnectedToServer() {
    return this.isConnected;
  }
}

export default SocketManager;
