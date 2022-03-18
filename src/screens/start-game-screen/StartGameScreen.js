import React from 'react';
import { Text, Button, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import Header from '../../components/Header/Header';
import GameScreen from '../game-screen/GameScreen';
import colors from '../../constants/colors';
import {
  Screen,
  GameContainer,
  InputContainer,
  Input,
  ButtonContainer,
  ConfirmedContainer,
  OutputText,
} from './styled-components';

const StartGameScreen = ({ onStartGame }) => {

  const [enteredValue, setEnteredValue] = React.useState('');
  const [confirmed, setConfirmed] = React.useState('');
  const [selectedNumber, setSelectedNumber] = React.useState('');

  const filterEnteredValue = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  }

  const handleResetButton = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const handleConfirmButton = () => {
    const choseNumber = parseInt(enteredValue);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
  };

  const confirmedOutput = confirmed ? (
    <ConfirmedContainer>
      <OutputText>
        tu seleccion es {selectedNumber}
      </OutputText>
      <Button 
        title='Empezar Juego' 
        onPress={() => onStartGame(selectedNumber)} 
        color={colors.primary} 
      />
    </ConfirmedContainer>
  ) : null;

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <Screen>
        <Header />
        <GameContainer>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              fontFamily: 'OpenSans-Medium',
            }}
          >
            Empezar juego
          </Text>
          <InputContainer>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                fontFamily: 'OpenSans-MediumItali',
              }}
            >
              Elija un numero
            </Text>
            <Input
              blurOnSubmit
              placeholder={'Ej: 11'}
              maxLength={2}
              onChangeText={filterEnteredValue}
              value={enteredValue}
              keyboardType={'number-pad'}
            />
            <ButtonContainer>
              <Button
                onPress={handleResetButton}
                title="Limpiar"
                color={colors.primary}
              />
              <Button
                onPress={handleConfirmButton}
                title="Confirmar"
                color={colors.primary}
              />
            </ButtonContainer>
          </InputContainer>
          {confirmedOutput}
        </GameContainer>
      </Screen>
    </TouchableWithoutFeedback>
  )
}


export default StartGameScreen;