import styled from 'styled-components';
import { IcLeft } from '../../assets/icons/icon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <IcLeft />
      </BackButton>
      <HeaderText>축하노트 쓰기</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  text-align: center;
  margin-top: 5.7rem;
  position: relative;
`;

const HeaderText = styled.p`
  ${({ theme }) => theme.fonts.head2};
  color: ${({ theme }) => theme.colors.white};
`;

const BackButton = styled.button`
  position: absolute;
  top: -0.5rem;
  left: 0;
`;
