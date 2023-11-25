import React from 'react';
import { BigLogo } from '../assets/icons/icon';
import styled from 'styled-components';
import style from 'style-component';

import kakaoLoginButtonImage from '../assets/images/kakaoLoginButton.png';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const Login = () => {
  return (
    <LoginWrapper>
      <StyledBigLogo />
      <MainTitle>축하의 순간, 사라지지 않게 콩!</MainTitle>
      <KakaoLoginButton onClick={() => (window.location.href = kakaoURL)}>
        <LoginButtonImage src={kakaoLoginButtonImage} alt="카카오 로그인 버튼" />
      </KakaoLoginButton>
    </LoginWrapper>
  );
};

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledBigLogo = styled(BigLogo)`
  margin-top: 40%;
`;

const MainTitle = styled.p`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 1.6rem;
`;

const KakaoLoginButton = styled.button`
  position: absolute;
  bottom: 22%;
`;

const LoginButtonImage = styled.img`
  width: 100%;
`;
