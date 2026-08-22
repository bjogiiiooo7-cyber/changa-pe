import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { colors } from '../utils/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/400x800?text=Changa+Pe' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Changa Pe</Text>
        <Text style={styles.subtitle}>Ludo Game</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GameSetup', { gameType: 'local' })}
        >
          <Text style={styles.buttonText}>Local Multiplayer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('GameSetup', { gameType: 'network' })}
        >
          <Text style={styles.buttonText}>Network Multiplayer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate('GameSetup', { gameType: 'ai' })}
        >
          <Text style={styles.buttonTextOutline}>Play with AI</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: colors.grayLight,
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: colors.info,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.white,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextOutline: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
