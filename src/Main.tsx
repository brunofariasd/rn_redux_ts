import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { increment, decrement } from './stores/storeCounter.store';

import {
  Container,
  ButtonContainer,
  ButtonText,
  ContainerValue,
  ContainerButton,
  ContainerValueText,
} from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const counterReducer = useSelector(
    (state: RootState) => state.counterReducer,
  );

  return (
    <Container>
      <ContainerValue>
        <ContainerValueText>{counterReducer.counter}</ContainerValueText>
      </ContainerValue>
      <ContainerButton>
        <ButtonContainer
          onPress={() => {
            dispatch(increment());
          }}
        >
          <ButtonText>Incrementar</ButtonText>
        </ButtonContainer>
        <ButtonContainer
          onPress={() => {
            dispatch(decrement());
          }}
        >
          <ButtonText>Decrementar</ButtonText>
        </ButtonContainer>
      </ContainerButton>
    </Container>
  );
};

export default Main;
