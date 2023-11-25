import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/CreateMessage/Header';
import SelectNote from '../components/CreateMessage/SelectNote';
import WriteMessage from '../components/CreateMessage/WriteMessage';

export const CreateMessage = () => {
  const [noteType, setNoteType] = useState(1);
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  const handleClickCompleteButton = () => {
    axios({
      method: 'post',
      url: `${import.meta.env.VITE_BASE_URL}/celebs`,
      data: {
        nickname: nickname,
        celeb_text: message,
        post_it: noteType,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          navigate('/event-list');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(nickname);
  console.log(message);
  return (
    <CreateMessageWrapper>
      <Header />
      <SelectNote noteType={noteType} setNoteType={setNoteType} />
      <WriteMessage noteType={noteType} setNickname={setNickname} setMessage={setMessage} />
      <CompleteButton>작성 완료</CompleteButton>
    </CreateMessageWrapper>
  );
};

const CreateMessageWrapper = styled.div`
  width: 100%;
`;

const CompleteButton = styled.button`
  ${({ theme }) => theme.fonts.title1};
  width: 100%;
  height: 5.2rem;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.mainBlack};
  margin-top: 5rem;
  margin-bottom: 3.4rem;
  border-radius: 1.2rem;
`;
