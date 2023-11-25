import styled from 'styled-components';
import {
  MiniClover,
  MiniCong,
  MiniHeart,
  SelectMiniClover,
  SelectMiniCong,
  SelectMiniHeart,
} from '../../assets/icons/icon';

const SelectNote = ({ noteType, setNoteType }) => {
  return (
    <SelectNoteWrapper>
      <SelectNoteTitle>원하는 축하노트를 선택해주세요</SelectNoteTitle>
      <NoteList>
        {noteType === 1 ? <SelectMiniClover /> : <MiniClover onClick={() => setNoteType(1)} />}
        {noteType === 2 ? <SelectMiniCong /> : <MiniCong onClick={() => setNoteType(2)} />}
        {noteType === 3 ? <SelectMiniHeart /> : <MiniHeart onClick={() => setNoteType(3)} />}
      </NoteList>
    </SelectNoteWrapper>
  );
};

export default SelectNote;

const SelectNoteWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

const SelectNoteTitle = styled.p`
  ${({ theme }) => theme.fonts.title1};
  color: ${({ theme }) => theme.colors.white};
`;

const NoteList = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 2rem;
`;
