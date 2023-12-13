import React from 'react';
import styled from 'styled-components';
import { LightIcon } from '../../assets';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [congData, setCongData] = useState([]); //개별 쪽지에 대한 정보

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
        setCongData(response.data.data.celeb_list);
        setRoomData(response.data.data);
        console.log('응답 데이터', response.data.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchUser();
  }, []);

  console.log(congData, '데이터');
  console.log(congData.length, '데이터길이');

  return (
    <>
      <Container>
        <AlertText>
          <img src={LightIcon} className="light-icon" alt="라이트아이콘" />
          <MessageCount>{congData.length}개</MessageCount>의 축하노트를 받았어요.
        </AlertText>
        <MessageContainer>
          {congData.map((celeb) => (
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
    <Date>2023.11.26</Date>
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
  margin-left: 0.2rem;
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
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border: 1px solid green;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 2.2rem;
  margin-top: 1.9rem;
  margin-bottom: 0.1rem;
  ${({ theme }) => theme.fonts.title1};
  color: ${theme.colors.black};
`;

const Content = styled.div`
  width: 11.6rem;
  height: 12rem;
  ${({ theme }) => theme.fonts.body2};
  color: ${theme.colors.black};
`;

const Date = styled.div`
  width: auto;
  height: 1.1rem;
  padding-right: 0;
  text-align: right;

  ${theme.fonts.caption};
  color: ${theme.colors.darkGrey};
`;
