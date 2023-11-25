import React from 'react';
import styled from 'styled-components';
import { Rings } from 'react-loader-spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Loading = () => {
  const access_token = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  axios({
    method: 'get',
    url: `${import.meta.env.VITE_BASE_URL}/login`,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((response) => {
      if (response.code === 200) {
        sessionStorage.setItem(userId, response.data.user_id);
        navigate('/event-list');
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <LoadingWrapper>
      <Rings color="#def487" height={80} width={80} />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
