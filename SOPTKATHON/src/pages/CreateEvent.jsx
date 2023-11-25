import React, { useEffect, useState } from 'react';
import { theme } from '../styles/theme';
import styled from 'styled-components';

const CreateEvent = () => {
  const [date, setDate] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ''); // 숫자 이외의 문자 제거

    if (value.length == 4) {
    } else if (value.length == 6) {
      setInputValue(`${value.slice(0, 6)}.${value.slice(6)}`);
    }

    setInputValue(value);
  };

  return (
    <CreateEventWrapper>
      <Header>이벤트 생성</Header>
      <Title>이벤트명</Title>
      <DateInput
        value={date}
        onChange={handleInputChange}
        placeholder="이벤트명을 입력해주세요 (11자)"
        inputHeight="4.4rem"
      ></DateInput>
      <Title>이벤트 날짜</Title>
      <DateInput value={date} onChange={handleInputChange} placeholder="0000.00.00" inputHeight="4.4rem"></DateInput>
      <Title>설명</Title>
      <DateInput
        value={date}
        onChange={handleInputChange}
        placeholder="이벤트 설명을 입력해주세요 (40자)"
        inputHeight="24rem"
      ></DateInput>
      <CreateEventButton>이벤트 등록</CreateEventButton>
    </CreateEventWrapper>
  );
};

export default CreateEvent;

const CreateEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Header = styled.div`
  margin-top: 5.7rem;
  text-align: center;
  color: ${theme.colors.white};
  ${theme.fonts.head2};
`;

const Title = styled.div`
  ${theme.fonts.title1}
  color: ${theme.colors.white};
`;

const DateInput = styled.input`
  width: 34.3rem;
  background-color: ${theme.colors.blackGrey};
  height: ${({ inputHeight }) => inputHeight};
  border-radius: 1rem;
  border: none;

  margin-bottom: 2.8rem;

  &::placeholder {
    padding: 1.4rem;
  }
`;

const CreateEventButton = styled.button`
  width: 34.3rem;
  height: 5.2rem;

  margin-bottom: 0;

  border-radius: 1.2rem;
  ${theme.fonts.title1}
  color: ${theme.colors.black};
  background-color: ${theme.colors.green};
`;
