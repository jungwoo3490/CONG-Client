import styled from 'styled-components';
import { BigClover, BigCong, BigHeart } from '../../assets/icons/icon';

const WriteMessage = ({ noteType, setNickname, setMessage, today }) => {
  const handleChangeNicknameInput = (e) => {
    setNickname(e.target.value);
  };

  const handleChangeMessageInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <WriteMessageWrapper>
      <WriteMessageTitle>축하노트를 작성해주세요</WriteMessageTitle>
      <NoteWrapper>
        <NicknameInput placeholder="닉네임을 입력해주세요(7자)" onChange={handleChangeNicknameInput} maxLength="7" />
        <MessageInput placeholder="메시지를 입력해주세요 (55자)" onChange={handleChangeMessageInput} maxLength="55" />
        <DateText>2023.11.26</DateText>
        {noteType === 1 ? <BigClover /> : noteType === 2 ? <BigCong /> : <BigHeart />}
      </NoteWrapper>
    </WriteMessageWrapper>
  );
};

export default WriteMessage;

const WriteMessageWrapper = styled.div`
  width: 100%;
  margin-top: 4.3rem;
`;

const WriteMessageTitle = styled.p`
  ${({ theme }) => theme.fonts.title1};
  color: ${({ theme }) => theme.colors.white};
`;

const NoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 17px;
  position: relative;
`;

const DateText = styled.p`
  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.darkGrey};
  position: absolute;
  top: 10%;
  left: 20%;
`;

const NicknameInput = styled.input`
  position: absolute;
  width: 65%;
  height: 3.8rem;
  border-radius: 0.8rem;
  top: 20%;
  left: 17%;
  line-height: 3.8rem;
  padding-left: 3%;
  border: none;
  ${({ theme }) => theme.fonts.title1};
  color: ${({ theme }) => theme.colors.black};
  &::placeholder {
    ${({ theme }) => theme.fonts.title1};
    color: #afafb2;
  }
`;

const MessageInput = styled.textarea`
  position: absolute;
  width: 65%;
  height: 15rem;
  border-radius: 0.8rem;
  top: 37%;
  left: 17%;
  line-height: 3.8rem;
  padding: 3%;
  border: none;
  resize: none;
  ${({ theme }) => theme.fonts.title1};
  color: black;
  &::placeholder {
    ${({ theme }) => theme.fonts.body1};
    color: #afafb2;
  }
`;
