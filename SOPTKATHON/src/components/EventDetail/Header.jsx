import React from 'react';
import styled from 'styled-components';
import { BackgroundImage } from '../../assets';

const Header = () => {
  return <Container></Container>;
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 37.5rem;
  height: 29.2rem;
  color: white;
  background: url(${BackgroundImage}) center/cover;
`;
