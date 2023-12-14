import Header from '../components/CreateMessage/Header';
import SelectNote from '../components/CreateMessage/SelectNote';
import WriteMessage from '../components/CreateMessage/WriteMessage';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateMessage = () => {
  const [noteType, setNoteType] = useState(1);
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  const { uuId } = useParams();
  const navigate = useNavigate();

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  const today = year + '.' + month + '.' + day;

  const handleClickCompleteButton = () => {
    axios({
      method: 'post',
      url: `${import.meta.env.VITE_BASE_URL}/celebs`,
      data: {
        room_uuid: uuId,
        nickname: nickname,
        celeb_text: message,
        post_it: noteType,
        post_time: today,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/event/${uuId}`);
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
      <WriteMessage noteType={noteType} setNickname={setNickname} setMessage={setMessage} today={today} />
      <CompleteButton onClick={handleClickCompleteButton}>작성 완료</CompleteButton>
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

export default CreateMessage;
