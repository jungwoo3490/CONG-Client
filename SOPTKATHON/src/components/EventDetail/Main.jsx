import React from 'react';
import styled from 'styled-components';
import { LightIcon } from '../../assets';
import { theme } from '../../styles/theme';

const Main = () => {
  return (
    <>
      <Container>
        <AlertText>
          <img src={LightIcon} className="light-icon" alt="라이트아이콘" />
          <MessageCount>40개</MessageCount>의 축하노트를 받았어요.
        </AlertText>
        <MessageContainer>
          <Message
            title="삐뽀"
            content="아니 니가 벌써 졸업이라고 ~~~ ?? 너무너무 축하해 !!!!!!! 개쓰껄개쓰ㅡ껄 우와우오아ㅜㅇ와우오아 하하"
          />
          <Message title="Message 1" content="This is the content of Message 1." date="2021.07.23" />
          <Message title="Message 1" content="This is the content of Message 1." />
          <Message title="Message 1" content="This is the content of Message 1." />
        </MessageContainer>
      </Container>
    </>
  );
};

export default Main;

const Message = ({ title, content, date }) => (
  <MessageWrapper>
    <Title>{title}</Title>
    <Content>{content}</Content>
    <Date>{date}</Date>
  </MessageWrapper>
);

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 37.5rem;
  height: auto;
  color: white;
  ${theme.fonts.head2}
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
`;

const MessageCount = styled.span`
  color: ${theme.colors.green};
  ${theme.fonts.head2};
`;

const MessageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto 1.6rem;
  border: 1px solid red;
`;

const MessageWrapper = styled.div`
  width: 16.6rem;
  height: 20rem;
  border: 1px solid green;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 2.2rem;
  margin-top: 1.9rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  border: 1px solid purple;
  ${({ theme }) => theme.fonts.title1};
  color: ${theme.colors.black};
`;

const Content = styled.div`
  width: 11.6rem;
  height: 14rem;
  margin: 0 auto;
  border: 1px solid yellow;
  ${({ theme }) => theme.fonts.body2};
  color: ${theme.colors.black};
`;

const Date = styled.div`
  width: 6.7rem;
  height: 1.1rem;
  margin-left: 7.4rem;
  border: 1px solid red;
`;
