import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MainNone = () => {
  return (
    <>
      <Container>
        <div>아직 축하노트가 없어요.</div>
        <div>가장 먼저 축하해볼까요?</div>
      </Container>
    </>
  );
};

export default MainNone;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 37.5rem;
  height: 52rem;
  color: ${theme.colors.mediumGrey};
  ${theme.fonts.body2}
`;
