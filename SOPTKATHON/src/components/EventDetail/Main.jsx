import React from 'react';
import styled from 'styled-components';
import { LightIcon } from '../../assets';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      console.log(import.meta.env.VITE_BASE_URL);
      try {
        console.log('요청 시작');
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/rooms/ea1c53aa-f5a2-43cd-875d-79b006e9777c`,
          {
            header: {
              withCredentals: true,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        console.log(response);
        setData(response.data.data.celeb_list);
        console.log('응답 데이터', response.data.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchUser();
  }, []);

  console.log(data);

  return (
    <>
      <Container>
        <AlertText>
          <img src={LightIcon} className="light-icon" alt="라이트아이콘" />
          <MessageCount>40개</MessageCount>의 축하노트를 받았어요.
        </AlertText>
        <MessageContainer>
          {data.map((celeb) => (
            <Message
              key={celeb.celeb_id}
              title={celeb.nickname}
              content={celeb.celeb_content}
              date={celeb.time} // or use a suitable property for date from your data
            />
          ))}
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
  ${({ theme }) => theme.fonts.title1};
  color: ${theme.colors.black};
`;

const Content = styled.div`
  width: 11.6rem;
  height: 14rem;
  margin: 0 auto;
  ${({ theme }) => theme.fonts.body2};
  color: ${theme.colors.black};
`;

const Date = styled.div`
  width: 6.7rem;
  height: 1.1rem;
  margin-left: 7.4rem;
`;
