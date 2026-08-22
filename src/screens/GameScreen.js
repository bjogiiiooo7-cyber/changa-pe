import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../utils/colors';
import { initializeGame } from '../redux/gameSlice';

const GameScreen = ({ route }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);
  const playersState = useSelector((state) => state.players);
  const [gameInitialized, setGameInitialized] = useState(false);

  useEffect(() => {
    if (!gameInitialized) {
      const { numberOfPlayers, gameType } = route.params;
      dispatch(
        initializeGame({
          numberOfPlayers,
          gameType,
        })
      );
      setGameInitialized(true);
    }
  }, [dispatch, gameInitialized, route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Changa Pe - Ludo Game</Text>
      </View>

      <View style={styles.gameBoard}>
        <Text style={styles.placeholder}>Game Board Coming Soon</Text>
        <Text style={styles.info}>
          Players: {gameState.numberOfPlayers}
        </Text>
        <Text style={styles.info}>Type: {gameState.gameType}</Text>
        <Text style={styles.info}>State: {gameState.gameState}</Text>
      </View>

      <View style={styles.playerInfo}>
        {playersState.players.map((player, index) => (
          <View key={player.id} style={styles.playerCard}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerScore}>
              Score: {playersState.scores[player.id] || 0}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.boardBackground,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  gameBoard: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.boardGrid,
  },
  placeholder: {
    fontSize: 18,
    color: colors.gray,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: colors.grayLight,
    marginVertical: 2,
  },
  playerInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  playerCard: {
    flex: 1,
    minWidth: '48%',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    margin: 4,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  playerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.dark,
  },
  playerScore: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 4,
  },
});

export default GameScreen;
