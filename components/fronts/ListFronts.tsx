import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import Search from '../common/Search';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  ${media.xsmall} {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    overflow: hidden;
  }
  th {
    min-width: 50px;
    background: #1098ad;
    color: white;
  }
  td {
    strong {
      color: #0b7285;
      transition: 0.3s;
      overflow: hidden;
      padding: 0.3rem;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: #1098ad;
        color: white;
      }
    }
    a {
      font-weight: bold;
      color: #862e9c;
      text-decoration: none;
      &:hover {
        color: #c92a2a;
      }
    }
    &.link {
      cursor: pointer;
      color: #1098ad;
      &:hover {
        color: #22b8cf;
      }
      &:active {
        transform: translateY(2px);
      }
    }
  }
`;

interface Props {
  fronts: BillType[];
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onUserList: (user_id: string) => void;
  onHallList: (hall: string) => void;
  onDetail: (id: string) => void;
}

const ListFronts: React.FC<Props> = ({
  fronts,
  title,
  onChange,
  onSearch,
  onKeyPress,
  onUserList,
  onHallList,
  onDetail,
}) => {
  return (
    <Container>
      <h2>프런트 전표 현황</h2>

      <Search
        mode="행사명"
        search={title}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <Table className="table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>행사명</th>
            <th>장소</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {fronts === null || fronts.length === 0 ? (
            <tr>
              <td colSpan={4}>작성된 전표가 없습니다.</td>
            </tr>
          ) : (
            <>
              {fronts.map((front, i) => (
                <tr key={i}>
                  <td>{new Date(front.created_at).toLocaleDateString()}</td>
                  <td>
                    <strong onClick={() => onDetail(front.id)}>
                      {front.title.length > 20 ? (
                        <>{front.title.slice(0, 20)}...</>
                      ) : (
                        <>{front.title}</>
                      )}
                    </strong>
                  </td>
                  <td className="link" onClick={() => onHallList(front.hall)}>
                    {front.hall}
                  </td>
                  <td className="link" onClick={() => onUserList(front.user_id)}>
                    {front.username} 님
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListFronts;
