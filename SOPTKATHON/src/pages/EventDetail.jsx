import React from 'react';
import styled from 'styled-components';
import Header from '../components/EventDetail/Header';
import Main from '../components/EventDetail/Main';
import MainNone from '../components/EventDetail/MainNone';
import { useEffect } from 'react';
import axios from 'axios';

export const EventDetail = () => {
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
        console.log('응답 데이터', response);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div>
      {/* 헤더(시작합니다까지 투명)
    main(안에 받았어요(messageHeader) 그 다음에 포스팃 나열 Flex) */}
      <Header />
      <Main />
      {/* <MainNone /> */}
    </div>
  );
};
