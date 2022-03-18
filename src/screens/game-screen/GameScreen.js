import React from 'react';
import { GameScreenContainer, GameScreenTitle, Number, ButtonContainer, } from './styled-components';
import { Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Screen } from '../start-game-screen/styled-components';
import colors from '../../constants/colors';
import Header from '../../components/Header/Header';

const GameScreen = ({ userOptions, onGameOver }) => {

  const generateRandomBetween = React.useCallback((min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
      console.log(rndNum, exclude, min, max);
      return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
  }, [currentHigh, currentLow, currentGuess, userOptions])

  const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userOptions))
  const [rounds, setRounds] = React.useState(0)
  const currentLow = React.useRef(1)
  const currentHigh = React.useRef(100)

  React.useEffect(() => {
    if (currentGuess === userOptions) onGameOver(rounds)
  }, [currentGuess, userOptions, onGameOver])

  const handlerNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userOptions) ||
      (direction === 'greater' && currentGuess > userOptions)
    ) {
      Alert.alert('No mientas...', 'tu sabes que no es verdad', [{ text: '¡Disculpa!' }, { text: 'Cancelar' }])
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(current => current + 1)
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <Screen>
        <Header />
        <GameScreenContainer>
          <GameScreenTitle>Juego iniciado</GameScreenTitle>
          <Number>{currentGuess}</Number>
          <ButtonContainer>
            <Button title="menor" onPress={() => handlerNextGuess('lower')} color={colors.primary} />
            <Button title="mayor" onPress={() => handlerNextGuess('greater')} color={colors.primary} />
          </ButtonContainer>
        </GameScreenContainer>
      </Screen>
    </TouchableWithoutFeedback>
  )
}

export default GameScreen