import { LightCard } from '../../assets/icons/icon';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const EventItem = ({ title, date, roomId }) => {
  const navigate = useNavigate();
  const handleEventDetail = () => {
    console.log(roomId);
    navigate(`/event/${roomId}`);
  };
  console.log(title, date);
  return (
    <EventItemWrapper onClick={() => handleEventDetail()}>
      <EventTitle>{title}</EventTitle>
      <EventDateText>{date}</EventDateText>
      <LightCardIc></LightCardIc>
    </EventItemWrapper>
  );
};

export default EventItem;

const EventItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blackGrey};
  gap: 2rem;
  padding: 2rem;
  width: 34.3rem;
  height: 10.8rem;
  border-radius: 10px;

  cursor: pointer;
`;

const EventTitle = styled.p`
  ${({ theme }) => theme.fonts.head2};
  color: ${({ theme }) => theme.colors.white};
`;

const EventDateText = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const LightCardIc = styled(LightCard)`
  position: absolute;
  right: 2.7rem;
  margin-top: 5.5rem;
`;
