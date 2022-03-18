import styled from 'styled-components/native';

export const Screen = styled.View`
  height: 100%;
  width: 100%;
`;

export const GameContainer = styled.View`
  height: 50%;
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputContainer = styled.View`
  height: 256px;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 48px;
  width: 25%;
  padding-left: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgb(117, 117, 117);
`;

export const ButtonContainer = styled.View`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

//confirmedOutput
export const ConfirmedContainer = styled.View`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OutputText = styled.Text`
  font-size: 16px;
`;