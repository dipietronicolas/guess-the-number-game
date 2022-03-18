import React from 'react';
import { Button } from 'react-native';
import { 
  ScreenContainer, Picture, RoundsContainer, TryText, ChoiceText 
} from './styled-components';
import colors from '../../constants/colors';

const GameOverScreen = ({ rounds, choice, onRestart }) => {
  return (
    <ScreenContainer>
      <Picture source={require('../../../assets/images/gameover.png')} />
      <RoundsContainer>
        <TryText>Intentos: {rounds}</TryText>
        <ChoiceText>¡{choice}!</ChoiceText>
      </RoundsContainer>
      <Button title='Reiniciar' onPress={onRestart} color={colors.primary} />
    </ScreenContainer>
  )
}

export default GameOverScreen;