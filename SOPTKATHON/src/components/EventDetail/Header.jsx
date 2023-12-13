import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BackgroundImage } from '../../assets';
import { PersonCircle } from '../../assets';
import { theme } from '../../styles/theme';
import axios from 'axios';

const Header = () => {
  const [roomData, setRoomData] = useState([]); //해당 방에 대한 정보
  useEffect(() => {
    const fetchUser = async () => {
      console.log(import.meta.env.VITE_BASE_URL);
      try {
        console.log('요청 시작~!');
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/rooms/ea1c53aa-f5a2-43cd-875d-79b006e9777c`,
          {
            header: {
              withCredentals: true,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        console.log('응답 데이터2', response);
        setRoomData(response.data.data);
      } catch (error) {
        console.error('에러:', error);
      }
    };
    fetchUser();
  }, []);
  return (
    <Container>
      <img src={PersonCircle} alt="방으로 가는 아이콘" />
      <Info>
        <Date>{roomData.time}</Date>
        <Title>{roomData.room_name}</Title>
        <Detail>{roomData.room_content}</Detail>
      </Info>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  height: 29.2rem;
  color: white;
  background: url(${BackgroundImage}) center/cover;

  img {
    margin-top: 4rem;
    margin-left: 1.7rem;
    margin-bottom: 6.5rem;

    width: 4rem;
    height: 4rem;
  }
`;

const Date = styled.div`
  display: flex;
  width: auto;
  height: 1.7rem;

  align-items: center;
  color: ${theme.colors.mediumGrey};

  ${theme.fonts.caption}
`;

const Title = styled.div`
  display: flex;
  width: auto;
  height: 3.4rem;
  margin-top: 0.6rem;
  margin-bottom: 1.5rem;

  color: #fff;

  ${theme.fonts.head1}

  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  width: 21.8rem;
  height: 1.7rem;

  color: #e7e7e7;
  ${theme.fonts.body1}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 85%;
  margin: 0 1.7rem;
`;
