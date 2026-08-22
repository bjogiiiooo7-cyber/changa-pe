# Changa Pe - Ludo Game for Mobile

A React Native Ludo game supporting 2-4 players with both local and network multiplayer capabilities.

## Features

- **Multiplayer Support**: 2-4 players
- **Local Multiplayer**: Play on the same device
- **Network Multiplayer**: Connect players over Wi-Fi/internet
- **Full Ludo Gameplay**: 
  - Dice rolling mechanics
  - Pawn movement and capturing
  - Winning conditions
  - Turn management
- **Cross-Platform**: iOS and Android
- **Smooth Animations**: Pawn movements and transitions
- **Score Tracking**: Real-time game state management

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - Development and deployment
- **Socket.io** - Real-time network communication
- **Redux** - State management
- **React Navigation** - Navigation between screens

## Project Structure

```
changa-pe/
├── app.json                 # Expo configuration
├── package.json             # Dependencies
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Board.js         # Game board display
│   │   ├── Pawn.js          # Individual pawn component
│   │   ├── Dice.js          # Dice roller component
│   │   └── PlayerInfo.js    # Player status display
│   ├── screens/             # App screens
│   │   ├── HomeScreen.js    # Main menu
│   │   ├── GameScreen.js    # Active game
│   │   ├── MultiplayerSetupScreen.js # Multiplayer config
│   │   └── GameOverScreen.js # Game results
│   ├── gameEngine/          # Core game logic
│   │   ├── board.js         # Board state management
│   │   ├── pawn.js          # Pawn logic
│   │   ├── dice.js          # Dice mechanics
│   │   ├── gameRules.js     # Game rules and validation
│   │   └── moves.js         # Movement calculations
│   ├── network/             # Networking
│   │   ├── socketManager.js # Socket.io connection
│   │   ├── gameSync.js      # State synchronization
│   │   └── messageTypes.js  # Network message definitions
│   ├── redux/               # State management
│   │   ├── gameSlice.js     # Game state
│   │   ├── playerSlice.js   # Player state
│   │   └── store.js         # Redux store
│   ├── utils/               # Utility functions
│   │   ├── constants.js     # Game constants
│   │   ├── colors.js        # Color schemes
│   │   └── helpers.js       # Helper functions
│   ├── navigation/          # Navigation setup
│   │   └── AppNavigator.js  # Navigation stack
│   └── App.js               # Entry point
└── assets/                  # Images, sounds, fonts
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator or Android Emulator (or physical device)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/bjogiiiooo7-cyber/changa-pe.git
   cd changa-pe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device/emulator**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on physical device

## Game Rules

### Basic Rules
- 4 pawns per player (colors: Red, Yellow, Green, Blue)
- Roll a 6 to bring a pawn into play
- Move pawns according to dice rolls
- Capture opponent pawns by landing on the same square
- First player to move all 4 pawns to home wins

### Movement
- Players take turns rolling the dice
- Move pawn forward by the number shown on dice
- Extra turn on rolling a 6
- Cannot move pawn beyond home

### Capturing
- Landing on an opponent's pawn captures it (sent back to base)
- Safe squares protect pawns from capture
- Home is always safe

## Local Multiplayer

1. Select "Local Multiplayer" from main menu
2. Choose number of players (2-4)
3. Enter player names
4. Pass device between players for turns

## Network Multiplayer

1. Select "Network Multiplayer" from main menu
2. Choose "Host Game" or "Join Game"
3. **Host**: Display game code and wait for players
4. **Join**: Enter game code to connect
5. Once all players connect, host can start game
6. Players play remotely with synchronized state

## Network Architecture

- Uses Socket.io for real-time communication
- WebSocket fallback for compatibility
- Server synchronizes game state across all clients
- Automatic reconnection on disconnect
- Message queuing for offline scenarios

## Key Game States

- **LOBBY**: Waiting for players to join
- **WAITING_FOR_TURN**: Player waiting for their turn
- **ROLLING_DICE**: Player rolling dice
- **SELECTING_PAWN**: Player choosing which pawn to move
- **MOVING_PAWN**: Animation of pawn movement
- **GAME_OVER**: Display results and winner

## API Endpoints (Backend)

When implementing a backend server, use these endpoints:

- `POST /api/game/create` - Create a new game
- `POST /api/game/join` - Join existing game
- `GET /api/game/:gameId` - Get game state
- `POST /api/game/:gameId/move` - Submit a move
- `WS /socket` - WebSocket connection for real-time updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] AI opponents for single player
- [ ] Game replay/spectate mode
- [ ] Leaderboard and statistics
- [ ] Sound effects and background music
- [ ] Customizable themes
- [ ] Offline game recording and sync
- [ ] Push notifications for turn alerts
- [ ] Cloud save system

## Troubleshooting

### Network Connection Issues
- Ensure both players are on the same network for local games
- Check firewall settings for network multiplayer
- Verify backend server is running and accessible

### Game State Sync Issues
- Check console logs for sync errors
- Ensure low network latency for smooth gameplay
- Restart game if state becomes inconsistent

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Happy Gaming! 🎲🎮**