// import { useEffect, useState } from 'react';

// import axios from 'axios';
// import styled from 'styled-components';
// import { theme } from '../styles/theme';

// const CreateEvent = () => {
//   const [date, setDate] = useState('');
//   const [eventName, setEventName] = useState('');
//   const [eventDetail, setEventDetail] = useState('');

//   // const [celebYear, setCelebYear] = useState('');
//   // const [celebMonth, setCelebMonth] = useState('');
//   // const [celebDay, setCelebDay] = useState('');

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleEventNameChange = (e) => {
//     const value = e.target.value.slice(0, 11);
//     setEventName(value);
//   };

//   const handleEventDetailChange = (e) => {
//     const value = e.target.value.slice(0, 40);
//     setEventDetail(value);
//   };

//   // const register = () => {
//   //   const dateString = date.toString();

//   //   const celebYear = dateString.slice(0, 4);
//   //   const celebMonth = dateString.slice(4, 6);
//   //   const celebDay = dateString.slice(6, 8);
//   //   axios
//   //     .post(`${import.meta.env.VITE_BASE_URL}/create`, {
//   //       user_id: id, //여긴 어디서?
//   //       room_name: eventName,
//   //       room_content: eventDetail,
//   //       celeb_year: celebYear,
//   //       celeb_month: celebMonth,
//   //       celeb_day: celebDay,
//   //     })
//   //     .then((response) => {
//   //       console.log('생성완료');
//   //       alert('생성완료');
//   //       console.log(response.data);
//   //       // navigate('');
//   //     })
//   //     .catch((error) => {
//   //       console.log('An error occurred:', error.response);
//   //       console.log(celebDay);
//   //     });
//   // };

//   return (
//     <CreateEventWrapper>
//       <Header>이벤트 생성</Header>
//       <Title>이벤트명</Title>
//       <DateInput
//         value={eventName}
//         onChange={(e) => handleEventNameChange(e)}
//         placeholder="이벤트명을 입력해주세요 (11자)"
//         inputHeight="4.4rem"
//       ></DateInput>
//       <Title>이벤트 날짜</Title>
//       <DateInput
//         value={`${celebYear}.${celebMonth}.${celebDay}`}
//         onChange={(e) => handleDateChange(e)}
//         placeholder="0000.00.00"
//         inputHeight="4.4rem"
//       ></DateInput>
//       <Title>설명</Title>
//       <DateInput
//         value={eventDetail}
//         onChange={(e) => handleEventDetailChange(e)}
//         placeholder="이벤트 설명을 입력해주세요 (40자)"
//         inputHeight="24rem"
//       ></DateInput>
//       <CreateEventButton
//         type="submit"
//         onClick={() => {
//           console.log('register');
//           // register();
//         }}
//       >
//         이벤트 등록
//       </CreateEventButton>
//     </CreateEventWrapper>
//   );
// };

// export default CreateEvent;

// const CreateEventWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: white;
// `;

// const Header = styled.div`
//   margin-top: 5.7rem;
//   text-align: center;
//   color: ${theme.colors.white};
//   ${theme.fonts.head2};
// `;

// const Title = styled.div`
//   ${theme.fonts.title1}
//   color: ${theme.colors.white};
// `;

// const DateInput = styled.input`
//   width: 34.3rem;
//   background-color: ${theme.colors.blackGrey};
//   height: ${({ inputHeight }) => inputHeight};
//   border-radius: 1rem;
//   border: none;

//   margin-bottom: 2.8rem;

//   &::placeholder {
//     padding: 1.4rem;
//   }
// `;

// const CreateEventButton = styled.button`
//   width: 34.3rem;
//   height: 5.2rem;

//   margin-bottom: 0;

//   border-radius: 1.2rem;
//   ${theme.fonts.title1}
//   color: ${theme.colors.black};
//   background-color: ${theme.colors.green};
// `;
