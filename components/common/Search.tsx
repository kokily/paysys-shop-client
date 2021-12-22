import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  width: 320px;
  padding: 5px;
  background: #444;
  background: rgba(103, 153, 255, 0.12);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.2);
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 10px 5px;
  float: left;
  font-size: 1rem;
  border: 0;
  background: #3bc9db;
  color: white;
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
  &::placeholder {
    color: white;
  }
  &:focus {
    color: #5f3dc4;
    outline: 0;
    background: #fff;
    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
  }
`;

const Button = styled.button`
  overflow: visible;
  position: relative;
  float: right;
  border: 0;
  padding: 0;
  cursor: pointer;
  width: 60px;
  height: 40px;
  color: #fff;
  font-size: 1rem;
  background: #1098ad;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
  &:-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  &:hover {
    background: #22b8cf;
    &:before {
      border-right-color: #22b8cf;
    }
  }
  &:active,
  &:focus {
    background: #0c8599;
    transform: translateX(-4px);
    &:before {
      border-right-color: #0c8599;
    }
  }
  &:before {
    content: '';
    position: absolute;
    border-width: 8px 8px 8px 0;
    border-style: solid solid solid none;
    border-color: transparent #1098ad transparent;
    top: 12px;
    left: -6px;
  }
`;

interface Props {
  mode: string;
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

const Search: React.FC<Props> = ({ mode, search, onChange, onSearch, onKeyPress }) => {
  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={`${mode}`}
        />
        <Button onClick={onSearch}>검색</Button>
      </Wrapper>
    </Container>
  );
};

export default Search;
