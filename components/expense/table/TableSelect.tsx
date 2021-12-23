import React from 'react';
import styled from 'styled-components';

// Styles
const StyledSelect = styled.select`
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
`;

type DataType = {
  value: string;
  title: string;
};

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: DataType[];
}

const TableSelect: React.FC<Props> = ({ title, name, value, onChange, data }) => {
  return (
    <tr>
      <th>{title}</th>
      <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
        <StyledSelect name={name} value={value} onChange={onChange}>
          {data.map((item) => (
            <option key={item.title} value={item.value}>
              {item.title}
            </option>
          ))}
        </StyledSelect>
      </td>
    </tr>
  );
};

export default TableSelect;
