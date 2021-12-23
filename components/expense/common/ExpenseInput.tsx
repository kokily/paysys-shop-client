import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.input`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border: 1px solid #e64980;
  border-radius: 4px;
`;

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExpenseInput: React.FC<Props> = ({ name, value, onChange }) => {
  return <Container type="text" name={name} value={value} onChange={onChange} />;
};

export default ExpenseInput;
