import React from 'react';

import { useAppDispatch, useAppSelector } from './hooks';
import { increment, decrement } from './hooks/storeCounter.store';

import {
  Container,
  ButtonContainer,
  ButtonText,
  ContainerValue,
  ContainerButton,
  ContainerValueText,
} from './styles';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const counterReducer = useAppSelector((state) => state.counterReducer);

  return (
    <Container>
      <ContainerValue>
        <ContainerValueText>{counterReducer.counter}</ContainerValueText>
      </ContainerValue>
      <ContainerButton>
        <ButtonContainer
          onPress={() => {
            dispatch(increment(2));
          }}
        >
          <ButtonText>Incrementar</ButtonText>
        </ButtonContainer>
        <ButtonContainer
          onPress={() => {
            dispatch(decrement(1));
          }}
        >
          <ButtonText>Decrementar</ButtonText>
        </ButtonContainer>
      </ContainerButton>
    </Container>
  );
};

export default Main;
