import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

registerLocale('ko', ko);

// Styles
const Container = styled.div`
  display: flex;
  label {
    display: flex;
    align-self: center;
    margin-left: 0.5rem;
    margin-right: 0.2rem;
  }
  input {
    border-radius: 4px;
    width: 120px;
    height: 34px;
    outline: none;
    border: 1px solid #ced4da;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #99e9f2;
    }
  }
`;

const Space = styled.div`
  display: flex;
  align-self: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

interface Props {
  startTime: Date;
  endTime: Date;
  setStartTime: Dispatch<SetStateAction<Date>>;
  setEndTime: Dispatch<SetStateAction<Date>>;
}

const Time: React.FC<Props> = ({ startTime, endTime, setStartTime, setEndTime }) => {
  return (
    <Container>
      <DatePicker
        locale="ko"
        startDate={startTime}
        selected={startTime}
        onChange={(date: any) => setStartTime(date)}
        dateFormat="yyyy, MM dd"
      />
      <Space>~</Space>
      <DatePicker
        locale="ko"
        startDate={endTime}
        selected={endTime}
        onChange={(date: any) => setEndTime(date)}
        dateFormat="yyyy, MM dd"
      />
    </Container>
  );
};

export default Time;
