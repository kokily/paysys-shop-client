import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { media } from '../../styles';
import Time from './common/Time';
import Chart from './common/Chart';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  h2 {
    color: #4263eb;
    margin-bottom: 3rem;
  }
`;

const ChartBox = styled.div`
  width: 100%;
  max-width: 1000px;
  ${media.large} {
    max-width: 600px;
  }
`;

interface Props {
  titles: TopTitleType[];
  startTime: Date;
  endTime: Date;
  setStartTime: Dispatch<SetStateAction<Date>>;
  setEndTime: Dispatch<SetStateAction<Date>>;
}

const TopTitle: React.FC<Props> = ({
  titles,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
}) => (
  <Container>
    <h2>
      행사 건수별 20순위 ({startTime.toLocaleDateString()} ~{' '}
      {endTime.toLocaleDateString()})
    </h2>

    <Time
      startTime={startTime}
      endTime={endTime}
      setStartTime={setStartTime}
      setEndTime={setEndTime}
    />

    <ChartBox>
      <Chart titles={titles} />
    </ChartBox>
  </Container>
);

export default TopTitle;
