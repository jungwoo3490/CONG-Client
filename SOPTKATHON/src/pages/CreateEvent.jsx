import React, { useEffect, useState } from 'react';

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
      CreatEvent
      <Test>테스트</Test>
      <DateInput value={date} onChange={handleInputChange}></DateInput>
    </CreateEventWrapper>
  );
};

export default CreateEvent;

const CreateEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Test = styled.h1`
  ${({ theme }) => theme.fonts.head1};
  color: white;
`;

const DateInput = styled.input``;
