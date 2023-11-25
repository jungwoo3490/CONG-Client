import React from 'react';

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
  return <div></div>;
};

export default CreateEvent;
