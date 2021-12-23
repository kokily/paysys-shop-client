import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../styles';
import Button from '../common/Button';
import AddItemInput from './common/AddItemInput';
import AddItemSelect from './common/AddItemSelect';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Logo = styled.div`
  background: #22b8cf;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #99e9f2;
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  height: auto;
`;

interface Props {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onAddItem: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onList: () => void;
}

const AddItem: React.FC<Props> = ({
  name,
  divide,
  native,
  unit,
  price,
  onChange,
  onAddItem,
  onKeyPress,
  onList,
}) => {
  const divideArray = [
    '식사(뷔페)',
    '식사(중식)',
    '식사(양식)',
    '식사(한식)',
    '식사(수행)',
    '식사(다과)',
    '대관료',
    '레드와인',
    '화이트와인/샴페인',
    '주스/차',
    '민속주/고량주',
    '양주',
    '기타주류',
    '칵테일',
    '반입료',
    '부대비용',
  ];
  const nativeArray = ['현역', '예비역', '일반'];

  return (
    <Container>
      <Logo>품목 등록</Logo>

      <Form>
        <AddItemInput name="name" value={name} onChange={onChange} label="품 명" focus />

        <AddItemSelect
          name="divide"
          value={divide}
          onChange={onChange}
          data={divideArray}
        />
        <AddItemSelect
          name="native"
          value={native}
          onChange={onChange}
          data={nativeArray}
        />

        <AddItemInput name="unit" value={unit} onChange={onChange} label="단 위" />
        <AddItemInput
          name="price"
          value={price}
          onChange={onChange}
          label="단 가"
          onKeyPress={onKeyPress}
        />

        <Button submit fullSize onClick={onAddItem}>
          등록하기
        </Button>
        <Button cancel fullSize onClick={onList}>
          취소하기
        </Button>
      </Form>
    </Container>
  );
};

export default AddItem;
