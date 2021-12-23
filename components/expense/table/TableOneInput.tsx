import React from 'react';
import styled from 'styled-components';

// Styles
const StyledInput = styled.input`
  width: 100%;
  border: none;
  text-align: right;
`;

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableOneInput: React.FC<Props> = ({ title, name, value, onChange }) => {
  return (
    <tr>
      <th>{title}</th>
      <td colSpan={3}>
        <StyledInput
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          style={{ textAlign: 'center' }}
        />
      </td>
    </tr>
  );
};

export default TableOneInput;
