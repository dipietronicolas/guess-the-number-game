/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import StartGameScreen from './screens/start-game-screen/StartGameScreen';
import GameScreen from './screens/game-screen/GameScreen';
import GameOverScreen from './screens/game-over-screen/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const handleGameOver = (numRounds) => {
    setGuessRounds(numRounds);
  }

  const handleRestart = () => {
    setGuessRounds(0);
    setUserNumber(null)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userOptions={userNumber} onGameOver={handleGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handleRestart} />
  }
  return (
    <SafeAreaView>
      {content}
    </SafeAreaView>
  );
};

export default App;
