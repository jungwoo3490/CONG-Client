import React from 'react';
import styled from 'styled-components';
import Header from '../components/EventDetail/Header';
import Main from '../components/EventDetail/Main';

export const EventDetail = () => {
  return (
    <div>
      {/* 헤더(시작합니다까지 투명)
    main(안에 받았어요(messageHeader) 그 다음에 포스팃 나열 Flex) */}
      <Header />
      <Main />
    </div>
  );
};
