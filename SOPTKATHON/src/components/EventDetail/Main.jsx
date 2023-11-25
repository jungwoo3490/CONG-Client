import React from 'react';
import styled from 'styled-components';
import { LightIcon } from '../../assets';
import { theme } from '../../styles/theme';
import { WriteButton } from '../../assets';

const Main = () => {
  return (
    //testgit
    <Container>
      <AlertText>
        <img src={LightIcon} alt="라이트아이콘" />
        <MessageCount>40개</MessageCount>의 축하노트를 받았어요.
      </AlertText>
      <MessageContainer>
        <Message />
        <Message />
        <Message />
        <Message />
      </MessageContainer>
      <img src={WriteButton} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 37.5rem;
  height: 29.2rem;
  color: white;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const AlertText = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 2.8rem;

  margin-top: 3.3rem;
  margin-left: 1.3rem;
  margin-bottom: 2.3rem;
  color: white;

  img {
    margin-right: 0.4rem;
  }
`;

const MessageCount = styled.span`
  color: ${theme.colors.fontGreen};
`;

const MessageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto 1.6rem;
  border: 1px solid red;
`;

const Message = styled.div`
  width: 16.6rem;
  height: 20rem;
  border: 1px solid green;
`;
