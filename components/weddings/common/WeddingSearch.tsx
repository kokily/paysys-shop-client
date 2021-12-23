import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  width: 350px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  button,
  a {
    width: 95px;
    float: 1;
    font-size: 0.9rem;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding: 0.5rem 0.25rem 0.4rem 0.25rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 700;
    transition: 0.3s;
    cursor: pointer;
  }
  a {
    border: 2px solid #e03131;
    color: #e03131;
    &:hover {
      color: white;
      border: 2px solid #e8590c;
      background: #e03131;
    }
  }
  button {
    border: 2px solid #099268;
    color: #099268;
    &:hover {
      color: white;
      border: 2px solid #0c8599;
      background: #099268;
    }
  }
`;

const Input = styled.input`
  width: 95px;
  height: 25px;
  border: 2px solid #1098ad;
  background: #22b8cf;
  color: white;
  border-radius: 3px;
  text-align: center;
  margin-right: 10px;
`;

interface Props {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

const WeddingSearch: React.FC<Props> = ({ search, onChange, onSearch, onKeyPress }) => {
  return (
    <Container>
      <Input
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onSearch}>검 색</button>
      <Link href="/expense">웨딩추가</Link>
    </Container>
  );
};

export default WeddingSearch;
