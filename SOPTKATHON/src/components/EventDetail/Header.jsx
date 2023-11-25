import React from 'react';
import styled from 'styled-components';
import { BackgroundImage } from '../../assets';
import { PersonCircle } from '../../assets';
import { theme } from '../../styles/theme';

const Header = () => {
  return (
    <Container>
      <img src={PersonCircle} alt="방으로 가는 아이콘" />
      <Info>
        <Date>2023. 11. 26 (일)</Date>
        <Title>끈끈디팟 졸작 축하해</Title>
        <Detail>63일동안 이어진 디팟의 인연!드디어 솝트에서 전시를 시작합니다.</Detail>
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
  border: 1px solid purple;

  align-items: center;
  color: ${theme.colors.mediumGrey};

  ${theme.fonts.caption}
`;

const Title = styled.div`
  display: flex;
  width: auto;
  height: 3.4rem;
  margin-bottom: 0.6rem;
  border: 1px solid purple;

  color: #fff;

  ${theme.fonts.head1}

  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  width: auto;
  height: 1.7rem;
  margin-bottom: 1.5rem;
  border: 1px solid purple;

  color: #e7e7e7;
  ${theme.fonts.body1}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 85%;
  margin: 0 1.7rem;
  border: 1px solid yellow;
`;
